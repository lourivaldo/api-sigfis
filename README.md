<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Run Docker

```bash
$ docker-compose up
```

## Migrations

```bash
$ docker-compose exec app sh

# Generate a new migration
$ npm run typeorm migration:create -- -n User

# This command will execute all pending migrations
$ npm run typeorm:migrate

# This command will execute down in the latest executed migration
$ npm run typeorm migration:revert
```

## PgAdmin
```http://localhost:9000/browser/```
```
User: admin@sigfis.com
Password: 123456
```

Access menu ```Object - Create - Server```:
```
Name: sigfis
Host: db
Port: 5432
Username: postgres
Password: postgres
```

## Install QGIS 3.4 Madeira (Ubuntu 18:04)
[Fonte](https://medium.com/@linhlinhle997/install-qgis-3-4-x-madeira-ltr-on-ubuntu-18-04-47da03f7cd53)

#### Step 1 — Add the package source in the apt source list:
Open /etc/apt/sources.list with:
```
$ sudo gedit /etc/apt/sources.list
```
Then copy and paste the following two lines to the bottom of this file:
```
deb https://qgis.org/ubuntugis-ltr bionic main
deb-src https://qgis.org/ubuntugis-ltr bionic main
```
Then save (CTRL + s) then exit.

#### Step 2 — Add the QGIS public key
Add the GPG key
```
$ wget -O - https://qgis.org/downloads/qgis-2020.gpg.key | gpg --import

```
Verify the key
```
$ gpg --fingerprint F7E06F06199EF2F2
```
Add the key to apt
```
$ gpg --export --armor F7E06F06199EF2F2 | sudo apt-key add -
```

#### Step 3 — After install QGIS:
```
$ sudo apt-get update
$ sudo add-apt-repository ppa:ubuntugis/ubuntugis-unstable
$ sudo apt install qgis python3-qgis
```

## Export GeoJson
```
SELECT json_build_object(
    'type', 'FeatureCollection',
    'crs',  json_build_object(
        'type',      'name', 
        'properties', json_build_object(
            'name', 'EPSG:4326'  
        )
    ), 
    'features', json_agg(
        json_build_object(
            'type',       'Feature',
            'id',         'id', -- the GeoJson spec includes an 'id' field, but it is optional, replace {id} with your id field
            'geometry',   ST_AsGeoJSON(geom)::json,
            'properties', json_build_object(
                -- list of fields
                'geom', 'to',
                'nome', 'cep'
            )
        )
    )
)
FROM fiscalizacoes;  --replace with your table name
```

### CLI
```
nest g controller fiscalizacoes
```
