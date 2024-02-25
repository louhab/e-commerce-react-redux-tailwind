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


# Step 2: Server With Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]