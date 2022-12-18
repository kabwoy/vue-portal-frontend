export default {

    async signup(context , payload){
        const response = await fetch("http://localhost:3000/signup" , {
            headers:{
                'Content-Type' :'application/json'
            },
            method:"POST",
            body:JSON.stringify(payload)
        })
        const data = response.json()
    },

    async login(context , payload){

        const response = await fetch("http://localhost:3000/login" , {headers:{
            'Content-Type':'application/json'
            } , method:"POST" , body:JSON.stringify(payload)})
        const data = await response.json()
        localStorage.setItem('token' , data)
        context.commit('setToken' , data)


    }
}