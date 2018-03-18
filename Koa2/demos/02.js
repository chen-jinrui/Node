const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello Koa2';
};

app.use(main);
app.listen(3300);
