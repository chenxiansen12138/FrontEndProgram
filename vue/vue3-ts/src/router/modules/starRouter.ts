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

export default [{
    name: "star1",
    path: "/star1",
    components: {
        starRoute: Star1
    }
}, {
    name: "star2",
    path: "/star2",
    components: {starRoute: Star2},
    children: [
        {name: 'info1', path: 'show/:name/:age/:info?', component: Info1, props: true}
    ]
}, {
    name: "star3",
    path: '/star3',
    components: {starRoute: Star3},
    children: [{
        name: 'info',
        path: 'show',
        component: Info,
        props(route: { query: any; }) {
            return route.query;
        }
    }]
    // }, {
    //     path: '/',
    //     redirect: '/star1'
}]