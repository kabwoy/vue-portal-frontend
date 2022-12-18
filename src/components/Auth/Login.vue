<template>

    <div class="row">
    <div class="container mt-4 col-lg-6 col-md-4">
        <form @submit.prevent="login">
            <h2 class="text-center"> Login</h2>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email"  id="email" class="form-control" >
            </div>
            <div class="form-group">
                <label for="">password</label>
                <input v-model="password" type="password" id="" class="form-control">
            </div>
            <div>
                <button class="btn btn-outline-dark btn-sm mt-2">Login</button>
                <p>Dont Have an account? <router-link class="" to="/signup">Signup</router-link></p>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            login(){
                if(this.email.trim() === '' || this.password.trim() === '') return alert("All fields are required")
                if(this.password.length<6) return alert('password should be of atleast 6 characters')
                this.$store.dispatch('login' , {email:this.email , password: this.password})
            }
        }

    }
</script>

<style scoped>
form{
    margin: auto;
}
    .container{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        padding: 10rem;
        background-color: #bac3ea;
        border-radius: 10px;
    }
</style>