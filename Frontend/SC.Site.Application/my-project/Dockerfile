# stage1 - build react app first 
FROM node:16 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ["Frontend/SC.Site.Application/my-project/package*.json", "."]
RUN npm install
COPY ["Frontend/SC.Site.Application/my-project/", "."]
RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:latest as final
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ["Frontend/SC.Site.Application/my-project/nginx/nginx.conf", "/etc/nginx/conf.d/"]
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]