FROM node:20

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URI=http://localhost:8080/api

COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]
