<template lang="">
    <div>

        <p>텍스트 보간법 사용: {{ rawHtml }}</p>
        <input v-bind="inputAttrs" />
        <!-- <div @click="updateHtml" v-html="rawHtml"></div> -->
        <span v-html="rawHtml"></span>
    </div>
</template>
<script>

export default {
    name: "Template",
    data() {
        return {
            rawHtml: '<span style="color: red">이것은 빨간색이어야 합니다.</span>',

            inputAttrs: {
                id: 'input',
                class: 'input',
                disabled: false
            }
        }
    },
    methods: {
        updateHtml() {
            this.rawHtml = "<span>김준서</span>"
            this.inputAttrs.disabled = !this.inputAttrs.disabled;
            console.log(this.rawHtml, this.isInputDisabled);

        }
    },
}
</script>
<style lang="">
    
</style>