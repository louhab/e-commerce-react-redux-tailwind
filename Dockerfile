# Step 1: Build React App
FROM node:alpine3.18 as build
WORKDIR /app 
COPY package.json .
RUN npm install -g pnpm
RUN touch .npmrc
RUN pnpm install 
RUN pnpm run build 
COPY . .


