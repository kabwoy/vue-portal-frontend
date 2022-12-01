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
       background: linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);
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
