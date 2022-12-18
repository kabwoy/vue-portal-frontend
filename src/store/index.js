import {createStore} from "vuex";
import studentsModule from "./modules/students/studentsModule";
import examModule from "./modules/exams/examModule";
import authModule from "./modules/auth/authModule";

const store = createStore({
    modules:{student:studentsModule , exam:examModule , auth:authModule},
    state(){},
    mutations:{},
    actions:{},
    getters:{},
})
export default store;