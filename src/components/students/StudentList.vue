<template>

    <div class="container table-responsive">
        <p class="text-center fs-5 fw-bold " >Students List</p>
   <table class="table table-hover  table-bordered">
       <thead class="bg-dark">
       <tr>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Dob</th>
           <th>Class</th>
           <th>Operations</th>
<!--           <th>Parent First Name</th>-->
<!--           <th>Parent Last Name</th>-->
<!--           <th>Parent Contact</th>-->
<!--           <th>Parent Second Contact</th>-->
<!--           <th>Home Address</th>-->
       </tr>
       </thead>
       <tbody>
       <tr v-for="student in $store.getters.getStudents">
           <td>{{student.first_name}}</td>
           <td>{{student.last_name}}</td>
           <td>{{student.dob}}</td>
           <td>{{student.class_level}}</td>
           <td><i @click="getStudent(student.id)" class="fa fa-eye" id="eye" aria-hidden="true"></i> <i @click="updateStudent(student.id)" id="edit" class="fas fa-edit mx-3"></i> <i  @click="deleteStudent(student.id)" id="delete" class="fas fa-trash"></i></td>
       </tr>
       </tbody>
   </table>
    </div>
</template>

<script>

    export default {
        name: "StudentList",
        methods:{
            getStudent(id) {
                this.$router.push({path:`students/${id}`})
            },

            updateStudent(id){
                this.$router.push({path:`students/${id}/edit`})
            },
            deleteStudent(id){
                this.$store.dispatch('deleteStudent' , {id:id})
            },

        },
        computed:{

        },
        async mounted(){
            this.$store.dispatch('getStudents')
        }
    }
</script>

<style scoped>
.container{
    margin: 25px auto;
}
.table{
    max-width: 70%;
    margin: auto;
}
    thead{
        color: white;
        font-weight: bold;
    }
    i{
        font-size: 1rem;
        cursor: pointer;

    }
    #eye:hover{
        color: green;
    }
    #edit:hover{
        color: #2224aa;
    }
    #delete:hover{
    color: rgba(154, 9, 9, 0.93);
}
</style>