FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

RUN apk update
RUN apk add
RUN apk add ffmpeg

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "server" ]