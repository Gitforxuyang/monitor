FROM node:10.15.2
EXPOSE 8081
RUN mkdir /app
# COPY ./demo/package-lock.json /app/package-lock.json
RUN npm install prom-client --registry=https://registry.npm.taobao.org
COPY ./demo/server.js /app/server.js
CMD node /app/server.js