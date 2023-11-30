<template lang="">
 <button @click="awesome = !awesome">전환</button>

<h1 v-if="awesome">Vue는 정말 멋지죠!</h1>
<h1 v-else>아닌가요? 😢</h1>

</template>
<script>
export default {
    data() {
        return {
            awesome: true
        }
    },
}
</script>
<style lang="">
    
</style>