# koa-angular4-demo
this case use koa and angular4.

## first
if you first time run this case. install the dependencies pkg.

```sh
npm install
```

please store some info to mongodb.

```sh
num run store
```

if don't want use mongodb ,you should modified `server/index.js` and `routes/`.

## run
angualr4 use Typescript and we need package the code.

> start mongodb server on you system first. `sudo mongod` || `mongod.exe`

package :

```sh
webpack
```

and start server:

```sh
npm start
```

open `127.0.0.1:3000` in browser.