<template>
<Header/>
    <router-view v-slot="slotProps" mode="out-in">
        <transition>
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>

</template>

<script>
    import AddDetails from "./components/students/AddDetails.vue";
    import StudentList from "./components/students/StudentList.vue";
    import ExamList from "./components/Exams/ExamList.vue";
    export default {
        components: {ExamList, StudentList, AddDetails},
        mounted() {
            this.$store.dispatch('getStudents')
            this.$store.dispatch('getExamDetails')
        }

    }

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,200&display=swap');

   *{
       margin: 0;
       font-family: 'Montserrat', sans-serif;
       box-sizing: border-box;
   }
   body{
       background: #355c7d; /* fallback for old browsers */
       background: -webkit-linear-gradient(to right, #355c7d, #6c5b7b, #c06c84); /* Chrome 10-25, Safari 5.1-6 */
       /*background-image: linear-gradient(to right, #355c7d, #6c5b7b, #c06c84),url('https://media.istockphoto.com/id/1264689237/photo/school-or-office-supplies-border-on-blackboard-background-copy-space.jpg?b=1&s=612x612&w=0&k=20&c=1zgwEJNRXZi0vz1dJJ0S9d0GO8V6Z1NvnXeJlXTGmOQ=');*/
   }

   .v-enter-from{
       opacity: 0;
       transform: translatex(-90px);
   }
   .v-enter-to{
       opacity: 1;
       transform: translateX(0);
   }
   .v-enter-active {
       transition: all 0.9s ease-out;
   }
   /*.v-leave-from{*/
   /*    opacity: 1;*/
   /*    transform: translateY(0);*/
   /*}*/

   /*.v-leave-to{*/
   /*    opacity: 0;*/
   /*    transform: translateY(-30px);*/

   /*}*/
   /*.v-leave-active{*/
   /*    transition: all 0.3s ease-out;*/
   /*}*/

</style>
