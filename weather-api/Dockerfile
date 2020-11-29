FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3600

ARG PORT
ARG OPEN_WEATHER_MAP_API_KEY

CMD ["npm", "run", "start"]
