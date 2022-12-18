export default {
    setStudents(state, payload) {
        state.students = payload
    },
    getStudentbyid(state , payload) {
      state.student.find((todo)=>todo.id === payload.id)

    },
    deleteStudent(state , payload){
        const delState = state.students.filter(student => student.id !== payload.id )
        state.students = delState
    }
}