<template>
    <div class="container">
        <h2>Exam Details</h2>
        <Table :titlehead="titles" :table-data="getExamDetails" @showById="showExam" @update-details="updateDetails" />
    </div>

</template>
<script>
    import Table from "../Table.vue";
    export default {
        name: "ExamList",
        components: {Table},
        data(){
          return{
            titles:['id' , 'Type of Exam' , 'English' , 'Kiswahili' , 'Math' , 'Science' , 'Social Studies' , 'CRE' , 'Student id' , 'Actions']
          }
        },
        methods:{
            showExam(id){
                const examid = this.$store.getters.getAllExamDetails.find(exam => exam.id == id)
                const studentid = this.$store.getters.getStudents.find(student=> student.id == examid.studentId)
                this.$router.push({path:`/exams/${examid.id}/students/${studentid.id}`})

            },

            async updateDetails(id) {

                this.$router.push({path:`/exams/${id}/edit`})

            }
        },
        computed:{
            getExamDetails(){
                return this.$store.getters.getAllExamDetails
            }
        },

        mounted(){
            this.$store.dispatch('getExamDetails')
        }
    }
</script>

<style scoped>

</style>