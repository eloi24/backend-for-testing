<h1 align="center">Welcome to backend-for-testing 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/typicode/json-server" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Backend for creating a fast api using json-server with https

## Run api

```sh
node server.js
```

## Usage

You need openssl to generate the autosigned certificates for https.


```sh
openssl genrsa -out key.key 2048

openssl req -x509 -new -nodes -key cert.key -days 365 -out cert.crt


```

## Run tests

```sh
npm run test
```

## Author

👤 **Eloi baulenas**

* Github: [@eloi24](https://github.com/eloi24)

## Show your support

Give a ⭐️ if this project helped you!

***
