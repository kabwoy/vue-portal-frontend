<template>
    <div class="container col-lg-12 col-md-6 mt-3">
        <h2 class="text-center fs-3 p-1">Exam Marks Entry</h2>
        <form>
            <div class="form-group">
                <label for="exam">Type of Exam</label>
                <select v-model="Exam" id="exam" class="form-select">
                    <option  selected disabled>Type of Exam</option>
                    <option value="Opening Term Exam">Opening Term Exam</option>
                    <option value="Mid Term Exam">Mid Term Exam</option>
                    <option value="End Of Term">End Term Exam</option>
                </select>
            </div>

            <div class="form-group">
                <label for="eng">English</label>
                <input id="eng" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="kisw">Kiswahili</label>
                <input id="kisw" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="math">Math</label>
                <input id="math" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="sci">Science</label>
                <input id="sci" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="ss">Social Studies</label>
                <input id="ss" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="cre">C.R.E/Religion</label>
                <input id="cre" type="text" class="form-control">
            </div>
            <div class="mt-2">
                <button class="btn btn-outline-dark">Submit</button>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: "ExamEntry",
        data(){
            return{
                Exam:""
            }
        },
        methods:{
            test(e){
                alert(this.Exam)
            }
        }
    }
</script>

<style scoped>
form{
    width: 50%;
    margin: auto;
    padding: 20px;
}
    .container{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
        border-radius: 10px;
        max-width: 80%;
    }
</style>