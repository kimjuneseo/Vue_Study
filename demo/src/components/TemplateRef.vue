<template>
    <ul>
      <li v-for="(item, index) in list" ref="items" :key="index">
        {{ item }}
      </li>
    </ul>
  </template>
  
<script>
export default {
  data() {
    return {
      list: [
        /* ... */
      ]
    }
  },
  mounted() {
    console.log(this.$refs.items)
  }
}
</script>

