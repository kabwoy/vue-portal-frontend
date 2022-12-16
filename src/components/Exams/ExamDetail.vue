<template>

 <div class="container mt-4">
     <div class="row">
         <div class="header col-lg-6">
             <div class="image">
                 <img class="image" src="https://ojasyog.com/wp-content/uploads/2021/05/421-4212617_person-placeholder-image-transparent-hd-png-download.png" alt="">
             </div>
             <h2>Full Name: {{studentDetail.first_name}} {{studentDetail.last_name}} </h2>
             <p>Addmission Number: {{studentDetail.id}}</p>
             <p>Class: {{studentDetail.class_level}}</p>
             <p><i>Type of Exam : <b>{{examDetail.type_of_exam}}</b></i></p>

         </div>
         <div class="col-sm">
             <h3 class="mt-2"> Remarks: {{grading}}</h3>
             <p><b>Total Marks:</b> <i><bold>{{totalMarks}}</bold></i></p>
             <p v-for="exam in Object.keys(ExamMarks)">{{exam}} - {{ExamMarks[exam]}}  </p>
             <b>Mean Grade: unknown</b>
         </div>
         <hr>
         <div class="col-lg-6">
             <canvas id="myChart"></canvas>
         </div>

     </div>
 </div>
</template>

<script>
    import Chart from 'chart.js/auto';
    export default {
        name: "ExamDetail",
        data(){
            return{
                ExamMarks:{}
            }
        },
        computed:{
            examDetail(){
                return this.$store.getters.getAllExamDetails.find(exam => exam.id == this.$route.params.examid)
            },
            studentDetail(){
                return this.$store.getters.getStudents.find(student => student.id == this.$route.params.studentid)
            },
            totalMarks(){
                let sum = 0 ;
                Object.values(this.ExamMarks).map((marks)=>{
                    sum = sum + marks
                })
                return sum
            },
            grading(){
                const totalMarks = this.totalMarks
                if(totalMarks>=0 && totalMarks<=249){
                    return "Below Average"
                }
                if(totalMarks>=250 && totalMarks<=299){
                    return "Average"
                }
                if(totalMarks>=300 && totalMarks<=349){
                    return "Above Average"
                }
                if(totalMarks>=350 && totalMarks<=399){
                    return "Good"
                }
                if(totalMarks>=400 && totalMarks<=500){
                    return "Execellent"
                }
            },
            marks(){
                const values = Object.values(this.ExamMarks)


            }
        },
         async mounted() {

            const response = await fetch(`http://localhost:3000/exams/${this.$route.params.examid}`)
             const data = await response.json()
             this.ExamMarks=data
             console.log(data)
             new Chart(document.getElementById("myChart") , {
                 type:'bar',
                 data:{
                     labels:Object.keys(data).map(subject=>subject),
                     datasets:[
                         {
                             label:`Exam Analysis`,
                             data:Object.values(data).map(marks=>marks)
                         }
                     ]
                 },
                 options:{
                     scales:{
                         y:{
                             max:100
                         }
                     }
                 }


             })

        }


    }
</script>

<style scoped>
    .desc{
        border: 1px solid green;
    }
    .image{
        background-color: red;
        width: 150px;
        height: 150px;
        border-radius: 75px;

    }

</style>