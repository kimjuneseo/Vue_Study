import { createApp } from 'vue'
import App from './App.vue'
import List from './components/List.vue'

const app = createApp(App);
// const app2 = createApp(App);

app.component('List', List);

app.mount('#app');
// app2.mount('#app2');


