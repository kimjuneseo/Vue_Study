<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld @click="clickHello" msg="Welcome to Your Vue.js App"/> -->
  <div>
    <List name="김준서"/>
    <Template></Template>
    <br>
    <Reactive></Reactive>
    <br>
    <Computed></Computed>
    <br>
    <ClassStyleBind></ClassStyleBind>
    <br>

  </div>
</template>

<script>
import Reactive from './components/Reactive01.vue';
import Template from './components/Template01.vue';
import HelloWorld from './components/HelloWorld.vue';
import Computed from './components/Computed01.vue';
import ClassStyleBind from './components/ClassStyleBind.vue';

export default {
  name: 'App',
  props: {
    appName:String
  },
  components: {
    HelloWorld, Template, Reactive, Computed, ClassStyleBind
  },
  
  methods: {
   clickHello($event){
    console.log($event);
  }

}
}


// console.log(document.querySelector('HelloWorld'));
// document.querySelector('HelloWorld')?.addEventListener("click", () => {
//   console.log(this);
// })

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
