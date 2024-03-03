//引入createApp创建应用
import {createApp} from 'vue'
import router from "@/router";
import {createPinia} from "pinia";
//引入App根组件
// @ts-ignore
import App from './App.vue'

let app = createApp(App);
const pinia = createPinia();
app.use(pinia);
//使用路由器
app.use(router)
app.mount('#app')
