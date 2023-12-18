import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
// const app2 = createApp(App);

app.use(pinia);
app.mount('#app');
// app2.mount('#app2');


