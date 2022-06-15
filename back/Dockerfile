
# fazer um dockerfile para um backend baseado em node com express que vai ser usado depois em um dockker-compose
FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN pwd

CMD ["yarn", "start"]