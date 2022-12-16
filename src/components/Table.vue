<template>

    <table class="table">
        <thead class="thead-dark bg-success">
        <tr>
            <th v-for="title in titlehead">{{title}}</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="data of tableData">
                <td v-for="d in data">{{d}}</td>
                <td><i @click="showById(data.id)" class="fa fa-eye" id="eye" aria-hidden="true"></i> <i @click="updateDetails(data.id)" id="edit" class="fas fa-edit mx-3"></i> <i  @click="deleteStudent(data.id)" id="delete" class="fas fa-trash"></i></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Table",
        props:['titlehead' , 'tableData' , 'id'],
        methods:{
            showById(id){
                this.$emit('showById' , id)
            },
            updateDetails(id){
                this.$emit('updateDetails' , id)
            }
        }
    }
</script>

<style scoped>
    i{
        cursor:pointer;
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