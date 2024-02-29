import {ref} from "vue";

let name1 = ref("风间由美")
let age1 = ref(45)
let showIdentity = () => {
    alert(name1.value + "的年龄是" + age1.value);
}

export {
    name1,
    age1,
    showIdentity
}