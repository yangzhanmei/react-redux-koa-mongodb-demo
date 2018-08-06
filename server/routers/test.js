const router = require('koa-router')();
const mongoose = require('mongoose');
const url = require('../utils/url');
mongoose.Promise = require('bluebird');
mongoose.connect(url);

const tests = mongoose.model('tests', mongoose.Schema({
    name: String
}));


router.get('/getTest', async function (ctx, next) {

    //使用Mongoose和Monk
    const result = await tests.find({}, { _id: 0 });
    const data = result[0].name;
    ctx.response.body = { data };

    if (next) {
        await next;
    }
});

module.exports = router;