import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
// @ts-ignore
import Star1 from "@/views/JinGuYuNai.vue";
// @ts-ignore
import Star2 from "@/views/BaiShiMoLiNai.vue";
// @ts-ignore
import Star3 from "@/views/MiShengMeiYue.vue";
//@ts-ignore
import Info from "@/views/Info.vue"
//@ts-ignore
import Info1 from "@/views/Info1.vue"
import communicationRouter from "@/router/modules/componentCommunication";

import starRouter from "@/router/modules/starRouter";

export const comRouter: Array<RouteRecordRaw> = [...communicationRouter, ...starRouter]


let router = createRouter({
    history: createWebHistory(),
    routes: comRouter
});

export default router;