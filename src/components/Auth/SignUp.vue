<template>
    <div class="container col-lg-6  mt-4 col-sm-12">
        <div class="row">
            <div class="col-lg-6 col-md-4 form">
                <form @submit.prevent="signup">
                    <h2 class="text-center">Sign Up</h2>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text"  id="email" class="form-control" v-model="email" >
                    </div>
                    <div class="form-group">
                        <label for="">password</label>
                        <input type="password" id="" class="form-control" v-model="password">
                    </div>
                    <div>
                        <button class="btn btn-outline-dark btn-sm mt-2">Sign Up</button>
                        <p>Have an account? <router-link class="" to="/login">Login</router-link></p>
                    </div>
                </form>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "SignUp",
        data(){
          return{
            email:"",
            password:""
          }
        },
        methods:{
           signup() {
               if(this.email.trim() === '' || this.password.trim() === '') return alert("All fields are required")
               if(this.password.length<6) return alert('password should be of atleast 6 characters')
               this.$store.dispatch('signup' , {email: this.email , password: this.password})
               this.$router.push({path:"/login"})
            }
        },
    }
</script>

<style scoped>
    .form{
        margin: auto;
    }
    .container{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        padding: 10rem;
        background-color: rgba(142, 191, 172, 0.98);
        border-radius: 10px;
        min-width: 60%;
    }
</style>