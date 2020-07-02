/**
 * 与纯客户端开发模式不同，服务端渲染的最终结果是生成 Client Bundle 和 Server Bundle
 * main.js 是通用的入口，供 entry-client.js 和 entry-server-save.js 共同使用。
 * 所以 entry-client.js 和 entry-server-save.js 中都会引入 main.js
 */

import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

Vue.config.productionTip = false

// 导出一个工厂函数，用于创建新的应用程序、router 和 store 实例
export function createApp () {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })
  
  // 返回 app 和 router
  return { app, router }
}

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
