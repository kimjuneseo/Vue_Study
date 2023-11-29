<template lang="">
    <div>
        <button :class="$attrs.class">attrs.class 테스트</button>
        <button @click="handerBtnClass" :class="classObject">버툰</button>
        <div :class="[activeClass, errorClass]"></div>
        <div :class="[isActive ? activeClass : '', errorClass]"></div>
        <div :class="[{ active: isActive }, errorClass]"></div>
        <!-- <input type="text" @input="({target}) => this.text = target.value"/> -->
        <input type="text" v-model="text"/>
        <br>
        <span>{{ text }}</span>
    </div>
</template>
<script>
export default {
    name: 'ClassStyleBind',
    data() {
        return {
            isRed: true,
            // classObject: {
            //     red: true,

            // },
            activeClass: 'active',
            errorClass: 'text-danger',
            text: '',
        }
    },
    methods: {
        handerBtnClass() {
            this.isRed = !this.isRed;
        }
    },
    computed: {
        classObject() {
            return {
                red: this.isRed
            }
        }
    }

}
</script>
<style lang="css">
    .red {
        background: #000; 
        border: none; 
        color: red;
    }
</style>