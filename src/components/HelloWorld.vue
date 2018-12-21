<template>
  <div class="hello">
    <div class="content">
      <x-input title="手机号码" type="tel" placeholder="请输入手机号码" v-model="formData.phone" required @on-change="inputVal" is-type="china-mobile">
        <img slot="label" class="input-icon" src="../assets/w_user.png" width="24" height="24">
      </x-input>
      <x-input title="密码" type="password" placeholder="请输入密码" v-model="formData.password" required @on-change="inputVal">
        <img slot="label" class="input-icon" src="../assets/w_pwd.png" width="24" height="24">
      </x-input>
      
      <box gap="10px 10px">
        <x-button class="theme-btn-grey btn-radius" v-show="!submission">登录</x-button>
        <x-button class="theme-btn-active btn-radius" v-show="submission" @click.native="submit">登录</x-button>
        <x-button class="register btn-radius" @click.native="register">注册</x-button>
      </box>
      <a class="forgetPwd" href="javascript:;" @click="goForgetPwd">忘记密码</a>
    </div>
  </div>
</template>

<script>
import { XInput, XButton, Box  } from 'vux'
import { getList } from '../api/server'

export default {
  name: 'HelloWorld',
  components: {
    XInput,
    XButton,
    Box 
  },
  data () {
    return {
      formData:{
        phone:'',
        password:''
      },
      submission:false,
    }
  },
  created(){
    getList().then(res=>{
    })
  },
  methods:{
    inputVal(val){
      if(this.formData.phone && this.formData.password){
        this.submission=true;
      }else{
        this.submission=false;
      }
    },
    goForgetPwd(){
      this.$router.push('/forget')
    },
    register(){
      this.$router.push('/register')
    },
    submit(){
      console.log(this.formData.phone)
    },
  },
  
}
</script>

<style scoped lang="scss">
  .hello{
    background: url(../assets/wechatBg.jpg) no-repeat center;
 	  background-size: cover;
    overflow: hidden;
    height: 100vh;
    display: flex;
    align-items: center;

    .weui-cell{
      background-color: transparent;
      color: #fff;
    }
    .content{
      width: 90%;
      margin: 0 auto;
      text-align: center;
    }
    .input-icon{
      padding-right:10px;
      display:block;
    }
    .register{
      background:rgba(255,255,255,0.8);
      color:#656565;
    }
    .forgetPwd{
      color:#c6c6c6;
      font-size:12px;
      text-align:center;
    }
  }
</style>
