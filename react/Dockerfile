# Build
FROM node:18.13.0-alpine as build

WORKDIR /app
RUN npm install -g pnpm@7.26.3
COPY ./frontend/package.json ./
COPY ./frontend/pnpm-lock.yaml ./
RUN pnpm install
COPY ./frontend .
ARG API_SERVER
ENV VITE_API_SERVER=${API_SERVER}
RUN VITE_API_SERVER=${API_SERVER} pnpm run build

# Serve
FROM node:18.13.0-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist ./build
