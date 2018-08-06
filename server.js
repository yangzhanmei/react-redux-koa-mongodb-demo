const koa = require('koa');

const bodyParser = require('koa-bodyparser');

const staticServer = require('koa-static');
const router = require('koa-router')();
const fs = require('fs');
const test = require('./server/routers/test');

const app = new koa();

app.use(staticServer(__dirname + '/dist'));

app.use(test.routes());

const main = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./views/index.html');
};
router.get('*', main);

app.use(router.routes());
app.use(bodyParser());

app.listen(3000);
