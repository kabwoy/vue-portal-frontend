<template>

</template>
<script>
    export default {
        name: "ExamList",
        data(){
          return{
              exams:[]
          }
        },
        methods:{


        },

        async mounted(){

            const response = await fetch("http://localhost:3000/exams")
            const data = await response.json()
            this.exams = data
            const keys = Object.keys(    this.exams[0])
            console.log(keys)

        }
    }
</script>

<style scoped>

</style>