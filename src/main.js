import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header.vue";
import router from "./routes/router.js";
import store from "./store";

const app = createApp(App)
app.component('Header' , Header)
app.use(router)
app.use(store)
app.mount('#app')
