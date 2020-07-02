/**
 * 使用 koa2 集成ssr (官方使用express)
 * koa是Express的下一代基于Node.js的web框架，目前有1.x和2.0两个版本
 */
// 第 1 步：创建一个 Vue 实例
// 第 2 步：创建一个 renderer
// 第 3 步：添加一个中间件来处理所有请求
const Vue = require('vue');

// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

const renderer = require('vue-server-renderer').createRenderer();

// 对于任何请求，app将调用该异步函数处理请求
app.use(async (ctx, next) => {
	const vm = new Vue({
		data: {
			title: 'app-ssr',
			url: ctx.url
		},
		template: `<div>您访问的 URL 是：{{ url }}</div>`
	})
	
	// 将 Vue 实例渲染为 HTML
	renderer.renderToString(vm, (err, html) => {
		if (err) {
			ctx.res.status(500).end('Internal Server Error')
			return
		}
		ctx.body = html
	})
})

const port = 3033;
app.listen(port, () => {
	console.log(`server started at localhost:${port}`)
})
