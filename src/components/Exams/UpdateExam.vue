<template>
    <div class="container mt-4">

        <div class="form-group" style="float: right;">
            <label class="m-1" for="class" style="font-weight:bold;">Filter by class</label>
            <select v-model="selectedClass" class="mt-2" id="class" @change="filterbyclass">
                <option disabled selected value="filter by class">filter by class</option>
                <option  v-for="c in classes" :value="c">{{c}}</option>
            </select>
        </div>
        <form @submit.prevent="updateExam">
            <div class="form-group">
                <label for="exam">Type of Exam</label>
                <select v-model="type_of_exam" id="exam" class="form-select">
<!--                    <option value="Type of Exam"  selected disabled>Type of Exam</option>-->
                    <option value="Opening Term Exam">Opening Term Exam</option>
                    <option value="Mid Term Exam">Mid Term Exam</option>
                    <option value="End Of Term">End Term Exam</option>
                </select>
            </div>
            <div class="form-group">
                <label for="eng">English</label>
                <input v-model="English" id="eng" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="kisw">Kiswahili</label>
                <input v-model="Kiswahili" id="kisw" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="math">Math</label>
                <input v-model="MathMatics" id="math" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="sci">Science</label>
                <input v-model="Science" id="sci" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="ss">Social Studies</label>
                <input v-model="Social_Studies" id="ss" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="cre">C.R.E/Religion</label>
                <input v-model="CRE" id="cre" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="students">students</label>
                <select v-model="student"  id="students" class="form-select">
                    <option  v-for="student in students" :value="student.id">{{student.first_name}}| {{student.id}}</option>
                </select>
            </div>
            <div class="mt-2">
                <button class="btn btn-outline-dark">Update Exam</button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: "UpdateExam",
        data(){
          return{
              type_of_exam:"",
              Exam:{},
              classes:[1,2,3,4,5,6,7,8],
              English:"",
              Kiswahili:"",
              MathMatics:"",
              Science:"",
              Social_Studies:"",
              students:[],
              CRE:"",
              selectedClass:"filter by class",
              student:""
          }
        },
        methods:{
            async filterbyclass(){
                const response = await fetch(`http://localhost:3000/students/${this.selectedClass}/filter`)
                const data = await response.json()
                if(data.length<=0){
                    alert("No one is in that class level")
                }else{
                    this.students = data
                }

                // this.students = students
                // this.students = students
            },
            async updateExam(){
                const examData = {
                    type_of_exam: this.type_of_exam,
                    English: this.English,
                    Kiswahili: this.Kiswahili,
                    CRE: this.CRE,
                    Math: this.MathMatics,
                    Social_Studies: this.Social_Studies,
                    Science:this.Science,
                    studentId:this.student
                }
                const response = await fetch(`http://localhost:3000/exams/${this.$route.params.id}` , {headers:{
                    'Content-Type':'application/json'
                    }, method:'PATCH' , body:JSON.stringify(examData)})
                this.$router.push({path:"/exams"})
            },
        },
        async mounted(){
            const response = await fetch(`http://localhost:3000/exams/${this.$route.params.id}/edit`)
            const data = await response.json()
            this.Exam = data
            this.type_of_exam = this.Exam.type_of_exam
                this.English = this.Exam.English
            this.Kiswahili = this.Exam.Kiswahili
            this.MathMatics = this.Exam.Math
            this.Science = this.Exam.Science
            this.Social_Studies = this.Exam.Social_Studies
            this.CRE = this.Exam.CRE
            this.student = this.Exam.studentId

        },
        async created(){
            // this.$store.dispatch('getStudents')
            const response = await fetch("http://localhost:3000/students")
            const data = await response.json()
            for(var d of data){
                this.students.push(d)
            }

        }
    }
</script>

<style scoped>
    .container{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
        border-radius: 10px;
        max-width: 80%;
        background-image: url("https://img.freepik.com/free-photo/final-exam-results-test-reading-books-words-concept_53876-123721.jpg?w=2000");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    form{
        width: 50%;
        margin: auto;
        padding: 20px;
    }
    label{
        font-weight: 500;
    }
</style>