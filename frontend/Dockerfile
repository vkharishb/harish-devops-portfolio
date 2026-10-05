FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY Harish_Bodapati_DevOps.pdf /usr/share/nginx/html/Harish_Bodapati_DevOps.pdf
EXPOSE 80
USER nginx
CMD ["nginx", "-g", "daemon off;"]
