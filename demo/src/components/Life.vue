<template lang="js">
<p>
  예/아니오 질문:
  <input v-model="question" :disabled="loading" />
  <input v-model="someObject.name" />
  <button  @click="event => someObject.name = 'adf'">버튼 테스트</button>
</p>
<p>{{ answer }}</p>
<p>{{ someObject.name }}</p>
<button ref="button" id="countBtn" :df="count" @click="increment">증가 {{count}}</button>
</template>
<script>

export default {
  data() {
    return {
      question: '',
      answer: '질문에는 일반적으로 물음표가 포함됩니다.',
      someObject: {
        name: 'adsf'
      },
      loading: false,
      count: 0
    }
  },
  watch: {
    // 질문이 변경될 때마다 이 함수가 실행됩니다
    someObject: {
        handler(newValue, oldValue){

            console.log("변경되었습니다.")
        },
        deep: true,
        immediate: true
    },
    question: {
        handler(newQuestion) {
        // 이제 컴포넌트 생성 시
        // `beforeCreate`와 `created` 훅 사이에
        // 한 번 실행됩니다.
        if (newQuestion.includes('?')) {
            this.getAnswer()
        }
      },
      // 열성적으로 콜백 실행
      immediate: true
    },
    count:{
        handler(val, preVal) {
            console.log(val, preVal, this.$refs.button, document.querySelector('#countBtn'));
        },
        flush: 'sync'
    }
  },
  methods: {
    async getAnswer() {
      this.loading = true
      this.answer = '생각 중...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오'
      } catch (error) {
        this.answer = '에러! API에 연결할 수 없습니다. ' + error
      } finally {
        this.loading = false
      }
    },
    increment(){
        this.count++;
        this.count++;
        this.count++;
    }
  }
}
</script>
<style lang="scss">
    
</style>