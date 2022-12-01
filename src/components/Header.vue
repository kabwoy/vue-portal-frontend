<template>
   <header>
       <h2>Portal</h2>
       <nav>
           <router-link to="/students/add">Add Student</router-link>
           <router-link to="/">Students</router-link>
           <router-link to="/exams/new">Add Exams</router-link>
           <router-link to="/exams">Exams</router-link>
       </nav>
   </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

    header{
        padding: 15px;
        background-color: #680768;
        display: flex;
        justify-content: space-between;
        align-items: center;


    }
    nav a{
        text-decoration: none;
        color: white;
        cursor:pointer;
        font-weight: bold;
        margin: 8px;

    }

    nav a:hover{
        color: #6cdb6c;
    }

    h2{
        color: white;
        font-weight: bolder;
    }

</style>