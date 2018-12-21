<template>
  <div class="Confirm-button">
     <button @click="getButtonClick">{{text || '确认'}}</button>
  </div>
</template>

<script>
import Confirm from '../sub/Confirm'
export default {
  name: 'Confirm-button',
  props:['text'],
  data () {
    return {
      msg: true
    }
  },
  methods:{
      getButtonClick(){
          this.$emit('message',this.msg)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
