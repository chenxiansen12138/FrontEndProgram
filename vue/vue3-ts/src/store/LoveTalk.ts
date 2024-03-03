import {defineStore} from "pinia";


export let loveTalkStore = defineStore("loveTalk", {
    state() {
        return {
            loveTalkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
});