<template>
    <div class="container mt-4">
        <form @submit.prevent="">
            <h2 class="text-center">Teachers Login</h2>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text"  id="email" class="form-control" >
            </div>
            <div class="form-group">
                <label for="">password</label>
                <input type="password" id="" class="form-control">
            </div>
            <div>
                <button class="btn btn-outline-dark btn-sm mt-2">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",

    }
</script>

<style scoped>
form{
    width: 49%;
    margin: auto;
}
</style>