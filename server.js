const fs = require("fs");
const Koa = require("koa");
const path = require("path");
const koaStatic = require('koa-static')
const app = new Koa();

const resolve = file => path.resolve(__dirname, file);
// 开放dist目录
app.use(koaStatic(resolve('./dist')))

// 第 2 步：获得一个createBundleRenderer
const { createBundleRenderer } = require("vue-server-renderer");
const bundle = require("./dist/vue-ssr-server-bundle.json");
const clientManifest = require("./dist/vue-ssr-client-manifest.json");

const renderer = createBundleRenderer(bundle, {
	runInNewContext: false,
	template: fs.readFileSync(resolve("./src/index.template.html"), "utf-8"),
	clientManifest: clientManifest
});

// 将 Vue 实例渲染为 HTML
function renderToString(context) {
	return new Promise((resolve, reject) => {
		renderer.renderToString(context, (err, html) => {
			console.log(html);
			err ? reject(err) : resolve(html);
		});
	});
}
// 第 3 步：添加一个中间件来处理所有请求
app.use(async (ctx, next) => {
	// 可以通过传入一个"渲染上下文对象"，作为 renderToString 函数的第二个参数，来提供插值数据
	const context = {
		title: "ssr test",
		url: ctx.url
	};
	// 将 context 数据渲染为 HTML
	const html = await renderToString(context);
	ctx.body = html;
});

const port = 3033;
app.listen(port, function() {
	console.log(`server started at localhost:${port}`);
});
