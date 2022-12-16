import {createStore} from "vuex";
import studentsModule from "./modules/students/studentsModule";
import examModule from "./modules/exams/examModule";

const store = createStore({
    modules:{student:studentsModule , exam:examModule},
    state(){},
    mutations:{},
    actions:{},
    getters:{},
})
export default store;