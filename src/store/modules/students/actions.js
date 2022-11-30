export default {

    async getStudents(context , payload) {
        const response = await fetch("http://localhost:3000/students")
        const data = await response.json()
        context.commit('setStudents', data)
    },

    async updateStudent(context , payload){
        const response = await fetch(`http://localhost:3000/students/${payload.id}` , {headers:{
            'Content-Type':'application/json'
            } , method:'PATCH' , body:JSON.stringify(payload.studentBody)})
        const data = await response.json()
        // alert('action')
    },

    async deleteStudent(context ,payload){
        const response = await fetch(`http://localhost:3000/students/${payload.id}` , {method:"DELETE"})
        const data = await response.json()
        context.commit('deleteStudent' , {id:payload.id})
        alert(data)
    }
}

