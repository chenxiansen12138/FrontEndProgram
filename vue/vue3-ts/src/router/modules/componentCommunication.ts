//@ts-ignore
import Props from '@/views/01_props/Father.vue'
//@ts-ignore
import Event from '@/views/02_custom-event/Father.vue'
//@ts-ignore
import Bus from '@/views/03_mitt/Father.vue'
//@ts-ignore
import Model from '@/views/04_v-model/Father.vue'
//@ts-ignore
import AttrsListeners from '@/views/05_$attrs/Father.vue'
//@ts-ignore
import RefChildrenParent from '@/views/06_$refs-$parent/Father.vue'
//@ts-ignore
import ProvideInject from '@/views/07_provide-inject/Father.vue'
//@ts-ignore
import Pinia from '@/views/08_pinia/Father.vue'
//@ts-ignore
import Slot from '@/views/09_slot/Father.vue'


export default [
    {
        path: '/props',
        components: {communication: Props}
    },
    {
        path: '/event',
        components: {communication: Event}
    },
    {
        path: '/mitt',
        components: {communication: Bus}
    },
    {
        path: '/model',
        components: {communication: Model}
    },
    {
        path: '/attrs',
        components: {communication: AttrsListeners}
    },
    {
        path: '/ref-parent',
        components: {communication: RefChildrenParent}
    },
    {
        path: '/provide-inject',
        components: {communication: ProvideInject}
    },
    {
        path: '/pinia',
        components: {communication: Pinia}
    },
    {
        path: '/slot',
        component: {communication: Slot}
    },
]