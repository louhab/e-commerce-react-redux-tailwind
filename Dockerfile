# Step 1: Build React App
FROM node:alpine3.18 as build
WORKDIR /app

# Copy only the package files first for better caching
COPY package.json .
COPY pnpm-lock.yaml .

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN pnpm run build

# Step 2: Create a smaller image for runtime
FROM node:alpine3.18 as runtime
WORKDIR /app

# Copy only the necessary artifacts from the build stage
COPY --from=build /app/build /app/build
COPY --from=build /app/node_modules /app/node_modules

# Expose the necessary port if your app is running a server
# EXPOSE 3000

# Set any environment variables if needed
# ENV NODE_ENV production

# Start your application
CMD ["npm", "start"]
