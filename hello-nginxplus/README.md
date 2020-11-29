# A Simple nodeJS service - hello-nginxplus for docker and vm image

## Packer build: To create a image for GCP to reference it while deploying through Terraform - You need to install Packer(https://www.packer.io/)
```sh
$ packer build hello-gcp-image.json
```

## Docker build

    docker build -t hello-nginxplus . --no-cache

## Usage

    $ docker run -p 3600:3600 --rm -t hello-nginxplus
    $ docker run --name hello-nginxplus-instance  -p 3600:3600 -d hello-nginxplus # to run on backgroud 

Test it with httpie

    http :3000/hello-nginxplus-api

Output would look like this
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 472
Content-Type: application/json; charset=utf-8
Date: Sun, 02 Aug 2020 13:12:20 GMT
ETag: W/"1d8-rdUoVwbhNpQhCyfcbGHMxbV2njI"
X-Powered-By: Express

{
    "body": "",
    "connection": {},
    "fresh": false,
    "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate",
        "connection": "keep-alive",
        "host": "localhost:3600",
        "user-agent": "HTTPie/2.2.0"
    },
    "hostname": "localhost",
    "ip": "::ffff:127.0.0.1",
    "ips": [],
    "method": "GET",
    "os": {
        "hostname": "XXXXX-iMac.local"
    },
    "path": "/hello-nginxplus",
    "protocol": "http",
    "query": {},
    "subdomains": [],
    "xhr": false
}
```
