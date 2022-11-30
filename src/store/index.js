import {createStore} from "vuex";
import studentsModule from "./modules/students/studentsModule";

const store = createStore({
    modules:{student:studentsModule},
    state(){},
    mutations:{},
    actions:{},
    getters:{},
})
export default store;