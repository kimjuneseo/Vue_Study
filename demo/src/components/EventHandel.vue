<template lang="">
    <div>
        <button @click="count++">1 추가</button>
        <p>숫자 값은: {{ count }}</p>
        <input type="text" @keyup.enter="handleKeyup">
    </div>
</template>
<script>
export default {
  name: "EventHandel",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleKeyup() {
      this.count++
    },
  },
};
</script>
<style lang="">
</style>