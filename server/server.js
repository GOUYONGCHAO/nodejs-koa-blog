const Koa = require('koa')
const InitManager = require('./core/init')
const parser = require('koa-bodyparser')
const cors = require('@koa/cors');

const catchError = require('./middlewares/exception')

const server = new Koa()
server.use(cors())
server.use(catchError)
server.use(parser())
InitManager.initCore(server)
server.listen(3000,()=>
    {
        console.log("服务端已启动")
})
