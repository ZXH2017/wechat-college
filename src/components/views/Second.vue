<template>
  <div class="first-app">
     {{ msg }}
  </div>
</template>

<script>
import Confirm from '../sub/Confirm'
export default {
  name: 'Second',
  components:{
    Confirm
  },
  data () {
    return {
      msg: 'Welcome to'
    }
  },
  methods:{
    getMessage(val){
      alert(val)
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
