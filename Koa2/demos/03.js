const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  if(ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello Koa2</data>'
  } else if(ctx.request.acceps('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello Koa2' };
  } else if(ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello Koa2</p>';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = 'Hello Koa2';
  }
};

app.use(main);
app.listen(3300);
