<template lang="js">
    <div>
        <p>메세지: {{ message }}</p>
        <input v-model="message" placeholder="메세지 입력하기" />
        <p>체크박스: {{ checked }}</p>
        <input type="checkbox" v-model="checked">
        
        <p>text: {{ text }}</p>
        <input type="text" v-model.lazy="text">
    </div>
</template>
<script>
export default {
    name:'FormBind',
    data() {
        return {
            message: '',
            checked: true,
            text: '',
        }
    },  
}
</script>
<style lang="">
    
</style>