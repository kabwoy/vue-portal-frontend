import {createRouter, createWebHistory} from 'vue-router'
import AddDetails from "../components/students/AddDetails.vue";
import Login from "../components/Auth/Login.vue";
import StudentList from "../components/students/StudentList.vue";
import Student from "../components/students/Student.vue";
import UpdateStudent from "../components/students/UpdateStudent.vue";
import ExamEntry from "../components/Exams/ExamEntry.vue";
import ExamList from "../components/Exams/ExamList.vue";

const  router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/students/add" , component:AddDetails},
        {path:"/" , component:StudentList},
        {path:"/students/:id" , component:Student},
        {path:"/students/:id/edit" , component:UpdateStudent},
        {path:"/exams/new" , component:ExamEntry},
        {path:"/exams" , component:ExamList}
        // {path:"/login" , component:Login}
        ]
})

export default router
