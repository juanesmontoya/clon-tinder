FROM node:22-bullseye

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start" ]