<template>
    <h1>{{studentDeatils}}</h1>
</template>

<script>
    export default {
        name: "Student",
        computed:{
            studentDeatils(){

                const id = this.$route.params.id
               return this.$store.getters.getStudents.find( student => student.id == id)


            }
        }
    }
</script>

<style scoped>

</style>