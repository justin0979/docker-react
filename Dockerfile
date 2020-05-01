FROM node:alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html