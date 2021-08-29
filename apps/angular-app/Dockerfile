FROM nginx:1.21.1-alpine

COPY ./deploy/nginx-conf/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist/angular-app /usr/share/nginx/html

EXPOSE 4200