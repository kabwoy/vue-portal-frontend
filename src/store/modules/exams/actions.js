export default {
    async getExamDetails(context){
        const response = await fetch("http://localhost:3000/exams")
        const data = await response.json()
        context.commit('setExamDetails' , data)

    }
}