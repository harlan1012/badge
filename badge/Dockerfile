FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html/my-app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80