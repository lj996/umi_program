const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const static = require('koa-static');
const app = new Koa();

app.use(static(path.join(__dirname, '../dist')));

app.use((ctx) => {
  ctx.type = 'html';
  const url = path.join(__dirname, '../dist/index.html');
  console.log(url);

  ctx.body = fs.readFileSync(url);
});

app.listen(3000);
