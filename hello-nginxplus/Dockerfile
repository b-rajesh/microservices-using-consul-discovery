FROM node:11-alpine

RUN mkdir -p /usr/src/app/src

WORKDIR  /usr/src/app

COPY . .

COPY index.js /usr/src/app/src/

RUN npm install

EXPOSE 3600

CMD ["npm", "run", "start"]


