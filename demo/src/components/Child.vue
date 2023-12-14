<template lang="">
    <div>
        <button @click="countPlus">더하기</button>
        {{ count1 }}
    </div>
</template>
<script>
export default {
    name: 'ChildVue',
    data() {
        return {
            count1: 0
        }
    },
    methods: {
        countPlus() {
            console.log(this.count1);
            this.count1++;
        }
    }
}
</script>
<style lang="">
    
</style>