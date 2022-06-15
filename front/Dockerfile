FROM node

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN pwd && ls

CMD ["yarn", "start"]