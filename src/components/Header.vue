<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Portal</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Students</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/exams">Exams</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/exams">DashBoard</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav links  mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Sign up</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
.links{
    margin-left: auto;
}

</style>