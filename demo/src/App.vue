<template>
  <div>
    <button :class="red">red</button>
    <List name="김준서" />
    <Template></Template>
    <hr>
    <br>
    <Reactive></Reactive>
    <hr>
    <br>
    <Computed01></Computed01>
    <hr>
    <br>
    <ClassStyleBind :class="red"></ClassStyleBind>
    <hr>
    <br>
    <IfElse></IfElse>
    <hr>
    <br>

  </div>
</template>

<script>
import List from './components/List.vue';
import Reactive from './components/Reactive01.vue';
import Template from './components/Template01.vue';
import Computed01 from './components/Computed01.vue';
import ClassStyleBind from './components/ClassStyleBind.vue';
import IfElse from './components/IfElse.vue';

export default {
  name: 'App',
  props: {
    appName: String
  },
  components: {
    Template, Reactive, Computed01, ClassStyleBind, IfElse
  },

  methods: {
    clickHello($event) {
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

.red {
  background: #000;
  border: none;
  color: red;
}
</style>
