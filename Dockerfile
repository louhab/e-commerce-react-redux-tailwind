# Step 1: Build React App
FROM node:alpine3.18 as build
WORKDIR /reactwithreduxtoolkit
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm install -g pnpm
RUN pnpm install
RUN npm run build
CMD ["npm" , "start"]
# # Step 2: Server With Nginx
# FROM nginx:1.23-alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf *
# COPY --from=build /app/build .
# EXPOSE 80
# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]