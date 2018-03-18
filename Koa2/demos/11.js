const compose = require('koa-compose');

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
};

const main = ctx => {
  ctx.response.body = 'Hello Koa2';
};

const middlewares = compose([logger, main]);
app.use(middlewares);
