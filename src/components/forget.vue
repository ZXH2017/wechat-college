<template>
    <div class="hello">
        <!-- 忘记密码第一步 -->
        <div class="content" v-show="!newPwd">
            <x-input title="手机号码" type="tel" placeholder="请输入手机号码" v-model="formData.phone" required @on-change="inputVal" is-type="china-mobile">
                <img slot="label" class="input-icon" src="../assets/w_user.png" width="24" height="24">
            </x-input>
            
            <x-input title="获取验证码" class="weui-vcode" placeholder="请输入验证码" v-model="formData.code" required @on-change="inputVal">
                <img slot="label" class="input-icon" src="../assets/w_vcode.png" width="24" height="24">
                <x-button slot="right" class="vcode-btn" mini>获取验证码</x-button>
            </x-input>
            
            <box gap="10px 10px">
                <x-button class="login-btn btn-radius" v-show="!nextStep">下一步</x-button>
                <x-button class="login-btn-active btn-radius" v-show="nextStep" @click.native="submitNext">下一步</x-button>
            </box>
        </div>

        <!-- 忘记密码第二步 -->
        <div class="content" v-show="newPwd">
            <x-input title="新密码" type="password" placeholder="请输入新密码" v-model="formData.password" required @on-change="inputVal" :min="6" :max="16" :is-type="mustRule">
            </x-input>
            
            <x-input title="确认密码" type="password" placeholder="请输入确认密码" v-model="formData.confirmPassword" required @on-change="inputVal" :min="6" :max="16" :equal-with="formData.password" :is-type="mustRule">
            </x-input>

            <box gap="10px 10px">
                <x-button class="theme-btn-grey btn-radius" v-show="!submitStep">确定</x-button>
                <x-button class="theme-btn-active btn-radius" v-show="submitStep" @click.native="submitForm">确定</x-button>
            </box>
        </div>
  </div>
</template>

<script>
import { XInput, XButton, Box, } from 'vux'
function valPwd(v){
    var r=/^[a-zA-Z0-9]+$/g;
    return r.test(v);
}
export default {
  name: 'forget',
  components: {
    XInput,
    XButton,
    Box,
  },
  data () {
    return {
        formData:{
            phone:'',
            code:'',
            password:'',
            confirmPassword:'',
        },
        nextStep:false,
        submitStep:false,
        newPwd:false,
        mustRule:function(value){
            return {
                valid:valPwd(value),
                msg:'仅支持英文字母或数字'
            }
        }
    }
  },
  created(){
    
  },
  methods:{
    inputVal(val){
      if(this.formData.phone && this.formData.code){
        this.nextStep=true;
      }else{
        this.nextStep=false;
      }
      if(this.formData.password && this.formData.confirmPassword){
        this.submitStep=true;
      }else{
        this.submitStep=false;
      }
    },
    submitNext(){
        this.newPwd=true;
    },
    submitForm(){
      console.log(this.formData)
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
    .vcode-btn{
        background: #989898;
        color:#fff; 
    }
    .input-icon{
      padding-right:10px;
      display:block;
    }
  }
</style>
