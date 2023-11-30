<template>
  <div>
    <button :class="red">red</button>
    <List01 name="김준서"></List01>
    <hr />
    <br />
    <Template></Template>
    <hr />
    <br />
    <Reactive></Reactive>
    <hr />
    <br />
    <Computed01></Computed01>
    <hr />
    <br />
    <ClassStyleBind :class="red"></ClassStyleBind>
    <hr />
    <br />
    <IfElse></IfElse>
    <hr />
    <br />
    <VFor></VFor>
    <hr />
    <br />
    <EventHandel></EventHandel>
    <hr />
    <br />
  </div>
</template>

<script>
import List01 from "./components/List01.vue";
import Reactive from "./components/Reactive01.vue";
import Template from "./components/Template01.vue";
import Computed01 from "./components/Computed01.vue";
import ClassStyleBind from "./components/ClassStyleBind.vue";
import IfElse from "./components/IfElse.vue";
import VFor from "./components/VFor.vue";
import EventHandel from "./components/EventHandel.vue";

export default {
  name: "App",
  props: {
    appName: String,
  },
  components: {
    List01,
    Template,
    Reactive,
    Computed01,
    ClassStyleBind,
    IfElse,
    VFor,
    EventHandel,
  },

  methods: {
    clickHello($event) {
      console.log($event);
    },
  },
};
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
