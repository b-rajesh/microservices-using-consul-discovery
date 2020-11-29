# NodeJS MicroService for Weather API

## Pre-requisite 
    Obtain APIKey from here by signing up here - https://openweathermap.org/
    You need replace the apikey inthe .env file - OPEN_WEATHER_MAP_API_KEY=<YOUR_APIKEY_FROM_https://openweathermap.org/>

    Please make sure that you have node.js installed (https://nodejs.org/) v8.9.4

## To create a image for GCP to reference it while deploying through Terraform - You need to install Packer(https://www.packer.io/)
```sh
$ packer build weather-gcp-image.json
```

## To run locally 
```sh
$ npm install 
$ npm start 
```

## Docker build the image
```sh
$ docker build -t yourprefix/weather-api:v1 . --no-cache
```

## Docker run the image
```sh
$ docker run --name weather-api-instance -p 3600:3000 -d <Your-Prefix>/weather-api:v1
```

## You can pass the port and apikey while running the code
```sh
$ PORT=3600 OPEN_WEATHER_MAP_API_KEY=<> npm start
```


## Docker usage to push docker hub
```sh
$ docker push <Your-Prefix>/weather-api:v1
```
## Docker usage to pull
```sh
$ docker pull <Your-Prefix>/weather-api:v1
```

## To call the API
```sh
$ curl http://localhost:3600/weather\?city\=Melbourne

or

$ http :3600/weather\?city==Melbourne
```