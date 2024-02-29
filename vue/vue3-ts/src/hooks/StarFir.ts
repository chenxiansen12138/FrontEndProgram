import {ref} from "vue";

export default function () {
    let name = ref("白石茉莉奈")
    let age = ref(38)
    let showPhone = () => {
        alert("0439-3496-0001")
    }
    return {
        name,
        age,
        showPhone
    }
}
