import {defineStore} from "pinia";
import {type Ref, ref} from "vue";


// export let countStore = defineStore('count', {
//     actions: {
//         increment(val: number) {
//             return this.sum += val;
//         }
//     },
//     state() {
//         return {
//             sum: 6
//         }
//     },
//     getters: {
//         bigSum: state => state.sum * 10,
//         sumAdd(): number {
//             return this.sum *= 10;
//         }
//     }
// })

export let countStore = defineStore('count', () => {
    let sum = ref(6);

    function increment(val: Ref<number>) {
        return sum.value += val.value;
    }

    return {sum, increment}
})