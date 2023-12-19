<template lang="">
    <div>
        inject {{count}}
    </div>
</template>
<script>
import { myInjectCountKey } from "@/key/key.js";

export default {
    name: 'ProvideInject',
    // inject: ['count'],
    inject: {
        count: {
            from: myInjectCountKey, 
            default: 0
        }
    },
    created() {
        console.log(this.count);
    }

}
</script>
<style lang="">
    
</style>