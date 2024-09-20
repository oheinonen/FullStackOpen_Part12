FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV REACT_APP_BACKEND_URI=http://localhost:8080/api

RUN npm run build


RUN npm install -g serve

CMD ["serve", "build"]
