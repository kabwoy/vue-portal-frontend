<template>

    <transition>
    <div class="container" style="
    background-image: url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/011.webp');
    height: 100vh;
  ">
        <form @submit.prevent="submitData">
            <p class="text-center" style="color: white">Add Student Details</p>
            <div class="row">
            <div class="student-section col col-md-6 col-sm-12">
            <p class="text-center" style="color: white">Student Details</p>
            <div class="form-group">
                <label for="first_name"><span>*</span>First Name</label>
                <input type="text" v-model="first_name" id="first_name" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="last_name"><span>*</span>Last Name</label>
                <input type="text" id="last_name" v-model="last_name" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="dob"><span>*</span>DOB</label>
                <input type="Date" id="dob" v-model="dob" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="class"><span>*</span>Class</label>
                <input type="text" id="class" v-model="class_level"  class="form-control" required>
            </div>
                <div class="form-group">
                    <label for="photo">photo</label>
                    <input type="file" id="photo"  class="form-control">
                </div>
            </div>
                <div class="col col-md-6 col-sm-12">
                    <p style="color: white">Parents & Relative Details</p>
                    <div class="form-group">
                        <label for="parent_first_name"><span>*</span>Parent FIrst Name</label>
                        <input type="text" id="parent_first_name" v-model="parent_first_name"  class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="parent_last_name"><span>*</span>Parent Last Name</label>
                        <input type="text" id="parent_last_name" v-model="parent_last_name"  class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="parent_contact"><span>*</span>Parent Contact</label>
                        <input type="text" id="parent_contact" v-model="parent_contact"  class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="parent_second_contact"><span>*</span>Parent Second Contact</label>
                        <input type="text" id="parent_second_contact" v-model="parent_second_contact"  class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="home"><span>*</span>Home Address</label>
                        <input type="text" id="home" v-model="home_address"  class="form-control" required>
                    </div>
                </div>
            </div>
            <div class="mt-2">
                <button class="btn btn-outline-success btn-sm">Add Student</button>
            </div>
        </form>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "AddStudent",

        data(){

            return{
                first_name:'',
                last_name:'',
                dob:'',
                class_level:'',
                parent_first_name:'',
                parent_last_name:'',
                parent_contact:'',
                parent_second_contact:'',
                home_address:''
            }
        },

        methods:{
            async submitData(){

                const response = await fetch("http://localhost:3000/students", {headers:{
                    'Content-Type':'application/json',
                    } , method:"POST" , body:JSON.stringify(
                        {first_name:this.first_name ,
                            last_name:this.last_name , dob:this.dob , class_level:this.class_level,
                        parent_first_name:this.parent_first_name , parent_last_name:this.parent_last_name,
                        parent_contact:this.parent_contact , parent_second_contact:this.parent_second_contact,
                        home_address:this.home_address})})
                const data = await response.json()
                this.first_name = ''
                this.last_name = ''
                this.dob = ''
                this.class_level = ''
                this.parent_first_name=''
                this.parent_last_name = ''
                this.parent_contact=''
                this.parent_second_contact = ''
                this.home_address=''



            },
        }
    }
</script>

<style scoped>
.container{
    margin-top: 1rem;
    box-shadow: 2px 2px 2px 3px #3333;
    /*max-width: 100%;*/
    border-radius:8px;
    padding: 15px;
    display: flex;

}
    form{
        padding: 25px;
        max-width: 100%;
        margin: auto;
    }
    .text-center{
        padding:0;
    }

    span{
        color:red;
    }
    p{
        margin: 2px;
        font-weight: bold;
    }
label{
    color: white;
    font-weight: 400;
}
</style>