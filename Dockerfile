FROM node:latest as build-stage
ARG HOST_BASE_URL=/
ARG API_BASE_URL=/
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN BASE_URL=${HOST_BASE_URL} VITE_API_BASE_URL=${API_BASE_URL} npm run build-only -- --base=${HOST_BASE_URL}

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf