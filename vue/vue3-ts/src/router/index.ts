import {createRouter, createWebHistory} from "vue-router";
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

let router = createRouter({
    history: createWebHistory(),
    routes: [{
        name: "star1",
        path: "/star1",
        component: Star1
    }, {
        name: "star2",
        path: "/star2",
        component: Star2,
        children: [
            {name: 'info1', path: 'show/:name/:age/:info?', component: Info1, props: true}
        ]
    }, {
        name: "star3",
        path: '/star3',
        component: Star3,
        children: [{
            name: 'info',
            path: 'show',
            component: Info,
            props(route) {
                return route.query;
            }
        }]
    // }, {
    //     path: '/',
    //     redirect: '/star1'
    }]
});

export default router;