<template>
    <ul>
      <!-- <li v-for="(item, index) in list" ref="items" :key="index">
        {{ item }}
      </li> -->
      <input :ref="inputRef" @input="onInput">
      <Child ref="child"/>
    </ul>
  </template>
  
<script>
import Child from './Child.vue'
export default {
  props: {
    count: {
      default:0
    }
  },
  components: {
    Child
  },
  emits: ['update:count'],
  data() {
    return {
      list: [
        /* ... */
      ]
    }
  },
  mounted() {
    console.log(this.$refs.items)
  },
  methods: {
    inputRef(el) {
      console.log(el);
    },
    onInput() {
      this.$refs.child.countPlus()
    }
  }
}
</script>

