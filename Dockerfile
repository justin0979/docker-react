FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /app/dist /usr/share/nginx/html