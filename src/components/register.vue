<template>
    <div class="register">
        <!-- 注册第一步 -->
        <div v-show="!inputBasic">
            <group>
                <x-input title="姓名" placeholder="请输入您的姓名" is-type="china-name" v-model="registerForm.name" @on-change="inputStepOne" required></x-input>
                <x-input title="岗位" placeholder="请输入您的岗位名称" v-model="registerForm.post" @on-change="inputStepOne" required></x-input>
            </group>

            <group>
                <selector title="用户类型" :options="list" placeholder="请选择" direction="rtl" v-model="registerForm.type" @on-change="inputStepOne" required></selector>
            </group>

            <group title="门店地址" v-show="registerForm.type!=='1'">
                <x-address title="省市区" :list="addressData" placeholder="请选择" v-model="registerForm.address" @on-change="inputStepOne" required></x-address>
                <x-input title="详细地址" placeholder="请输入详细地址" v-model="registerForm.detailed" @on-change="inputStepOne" required></x-input>
            </group>

            <box gap="10px 10px">
                <x-button class="login-btn btn-radius" type="primary" v-show="!nextStep">下一步</x-button>
                <x-button class="theme-btn-active btn-radius" v-show="nextStep" @click.native="submitNext">下一步</x-button>
            </box>
        </div>

        <!-- 注册第二步 -->
        <div v-show="inputBasic">
            <group>
                <x-input title="手机号码" type="tel" placeholder="请输入您的手机号码" v-model="registerForm.phone1" required @on-change="inputStepTwo" is-type="china-mobile">
                </x-input>
                <x-input title="获取验证码" class="weui-vcode" keyboard="number" placeholder="请输入验证码" v-model="registerForm.code1" required @on-change="inputStepTwo">
                    <x-button slot="right" class="v1-btn" mini>获取验证码</x-button>
                </x-input>
            </group>

            <group>
                <x-input title="新密码" type="password" placeholder="英文字母或数字，6~16个字符" v-model="registerForm.password" required @on-change="inputStepTwo" :min="6" :max="16" :is-type="mustRule">
                </x-input>
        
                <x-input title="确认密码" type="password" placeholder="英文字母或数字，6~16个字符" v-model="registerForm.confirmPassword" required @on-change="inputStepTwo" :min="6" :max="16" :equal-with="registerForm.password" :is-type="mustRule">
                </x-input>
            </group>

            <box gap="10px 10px">
                <x-button class="login-btn btn-radius" v-show="!submitStep">确定</x-button>
                <x-button class="theme-btn-active btn-radius" v-show="submitStep" @click.native="submitForm">确定</x-button>
            </box>
        </div>
    </div>
</template>

<script>
import { XInput, XButton, Box, Group, Selector, XAddress} from 'vux'
import addressChinaData   from '../api/addressData'      
function valPwd(v){
    var r=/^[a-zA-Z0-9]+$/g;
    return r.test(v);
}
export default {
  name: 'register',
  components: {
        XInput,
        XButton,
        Box,
        Group,
        Selector,
        XAddress,
  },
  data () {
    return {
        addressData:addressChinaData,
        list: [{key: '0', value: '经销商'}, {key: '1', value: '内部人员'}],
        registerForm:{},
        submitStep:false,//第二步
        nextStep:false,//第一步
        inputBasic:false,//是否填写基本信息
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
    inputStepOne(){
        if(this.registerForm.type=='1'){
            if(this.registerForm.name && this.registerForm.post){
                this.nextStep=true;
            }else{
                this.nextStep=false;
            }
        }else{
            if(this.registerForm.name && this.registerForm.post && this.registerForm.address && this.registerForm.detailed){
                this.nextStep=true;
            }else{
                this.nextStep=false;
            }
        }
    },
    inputStepTwo(){
        if(this.registerForm.phone1 && this.registerForm.code1 && this.registerForm.password && this.registerForm.confirmPassword){
            this.submitStep=true;
        }else{
            this.submitStep=false;
        }
    },
    submitNext(){
        this.inputBasic=true;
    },
    submitForm(){
        console.log(this.registerForm)
    }
  },
}
</script>

<style scoped lang="scss">
    .register{
        background-color:#F7F7F7;
        overflow: hidden;
        height: 100vh;
        .login-btn{
            background:#e1e1e1;
            color:#989898;
        }
    }
</style>
