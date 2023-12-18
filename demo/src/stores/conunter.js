import { defineStore } from "pinia";

export const userAlertsStore = defineStore('alerts', {
    state: () => ({ count: 0, name: 'Eduardo' }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        }
    }
})
// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     const name = ref('Eduardo')
//     const doubleCount = computed(() => count.value * 2)
//     function increment() {
//         count.value++
//     }

//     return { count, name, doubleCount, increment }
// })