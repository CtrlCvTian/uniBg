/*
 * @Description:
 * @Author: tiange
 * @Date: 2020-04-11 17:06:04
 * @LastEditTime: 2020-04-11 17:28:23
 * @LastEditors: tiange
 */
const Koa = require('koa');
const router = require('koa-router')()
const app = new Koa()

// 匹配404页面
app.use(async (ctx, next) => {
  let err = new Error('404')
  err.status = 404
  ctx.body = err
  next()
})

router.get('/', async (ctx) => {
  ctx.body = '首页'
})
// 启动路由
app.use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server is starting at port 3000')
})