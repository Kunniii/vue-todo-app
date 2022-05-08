FROM node:17-alpine
WORKDIR /app
EXPOSE 8080
COPY ./vue/* /app/
RUN npm install

CMD "npm run serve"