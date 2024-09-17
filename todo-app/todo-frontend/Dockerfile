FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL='http://localhost:8080/api'

RUN npm run build

RUN npm run test:ci

RUN npm install -g serve

CMD ["serve", "dist"]
