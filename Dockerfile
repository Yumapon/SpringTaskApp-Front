FROM nginx:1.19.3

RUN sed -i -e '/^    location \ {$/a \        try_files $uri /index.html;' /etc/nginx/conf.d/default.conf

COPY ./build /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html