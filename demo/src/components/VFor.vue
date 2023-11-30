<template lang="">
    <div>
        <li v-for="({message}, index) in items">
            {{ message }} {{ index }}
        </li>
        <ul>
            <li v-for="value in myObject">
                {{ value }}
            </li>
        </ul>
        <span v-for="n in 10">{{ n }}</span>
        <li v-for="n in numberFive">{{ n }}</li>
    </div>
</template>
<script>
export default {
    name: 'VFor',
    data() {
      return {
            items: [{ message: 'Foo' }, { message: 'Bar' }],
            myObject: {
                title: 'Vue에서 목록을 작성하는 방법',
                author: '홍길동',
                publishedAt: '2016-04-10'
            },
            numbers: [1,2,3,4,5],
        }
    },
    computed: {
        numberFive() {
            return this.numbers.filter(n => n === 5)
        }
    }

}
</script>
<style lang="">
    
</style>