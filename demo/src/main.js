import { createApp } from 'vue'
import App from './App.vue'
import List from './components/List.vue'

const app = createApp(App);

app.component('List', List);

app.mount('#app');


