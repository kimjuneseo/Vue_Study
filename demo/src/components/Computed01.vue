<template lang="">
    <div @click="handelDisplay">
        {{Isdisaply}}
    </div>
</template>
<script>
export default {
    name: 'Computed',
    data() {
        return {
            divAttr: {
                display: true
            }
        }
    },
    computed: {
        Isdisaply() {
            return this.divAttr.display ?  'yes' : 'no';
        }
    },
    methods: {
        handelDisplay() {
            this.divAttr.display = !this.divAttr.display
        }
    }
}
</script>
<style lang="">
    
</style>