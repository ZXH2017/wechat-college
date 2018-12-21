<template>
    <div class="q-chat-main">
        <div class="body">
            <template v-for="(item,index) in msgList" >
                <div class='message-container' :key="index" v-if="item.direction=='left'">
                    <template v-if="item.type==1">
                        <img src="../../assets/chat_logo.jpg" alt="公众号头像" class="head-portrait">
                        <div class='message-box'>
                            <div class='message-content'>
                                <span>{{item.content}}</span>
                                <span>
                                    <div class='triangle-left-outer'></div>
                                    <div class='triangle-left-inner'></div>
                                </span>
                            </div>
                        </div>
                    </template>

                    <template v-if="item.type==2">
                        <img src="../../assets/chat_logo.jpg" alt="公众号头像" class="head-portrait">
                        <div class='message-box'>
                            <img src="../../assets/img.png" class="pure-picture">
                        </div>
                    </template>

                    <template v-if="item.type==3">
                        <img src="../../assets/chat_logo.jpg" alt="公众号头像" class="head-portrait">
                        <div class='message-box'>
                            <div class='imageText'>
                                <img src="../../assets/456.png" class="text-picture">
                                <span class="floatText">{{item.title}}</span>
                            </div>
                        </div>
                    </template>
                </div>

                <div class='message-right-container' :key="index" v-if="item.direction=='right'">
                    <div class='message-from'>
                        <img src="../../assets/chat_user.jpg" alt="用户头像" class="head-portrait">
                    </div>
                    <div class='message-box'>
                        <div class='message-content'>
                            <span>{{item.content}}</span>
                            <span>
                                <div class='triangle-right-outer'></div>
                                <div class='triangle-right-inner'></div>
                            </span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="chat-send-btn">
            <x-input class="weui-vcode" v-model="sendMsg" @keyup.13="send" autocomplete="off" @on-blur="onBlur" @on-focus="onFocus">
                <x-button slot="right" type="primary" mini class="send-btn" @click.native="send">发送</x-button>
            </x-input>
        </div>
    </div>
</template>

<script>
import { XInput,XButton } from 'vux'

export default {
    name: 'chat',
    components: {
        XInput,
        XButton,
    },
    data () {
        return {
            msgList:[
                {type:1,content:'亲，输入关键词，可一键查到你需要的文章哦！',direction:'left'},
                {type:1,content:'星巴克',direction:'right'},
                {type:3,title:'全场1000000杯星巴克，5折大放送！',direction:'left'},
                {type:1,content:'我想问一下最近年中了有什么优惠吗？急急急',direction:'right'},
                {type:2,direction:'left'},
                {type:1,content:'哇塞',direction:'right'},
                {type:1,content:'谢谢你哦',direction:'right'},
                {type:1,content:'别客气~很高兴为您服务',direction:'left'},
            ],
            sendMsg:'',
            interval:null,
        }
    },
    created(){
    },
    methods:{
        send(){
            if(this.sendMsg){
                console.log('this.sendMsg):',this.sendMsg)
                let params={
                    content:this.sendMsg,
                }
                let self=this;
            }
                // this.scrollToBottom();
        },
        getMsg(){
            this.scrollToBottom();
        },
        run(){
            let self=this;
            this.invId=setInterval(()=>{
                self.getMsg(self);
            },300);
        },
        clear(){
            clearInterval(this.invId);
        },
        onFocus(val, $event){
            var body= document.querySelector('.q-chat-main .body');
            body.scrollTop = body.scrollHeight;
        },
        onBlur(val, $event){
            window.scroll(0,0);
        },
        scrollToBottom(){
            setTimeout(()=>{
                var body= document.querySelector('.q-chat-main .body');
                if(body){
                    var height=body.scrollHeight;
                    if(body.scrollTop!==undefined){
                        body.scrollTop=height;
                    }
                }
            },500);
        },
    },
    mounted(){
        this.getMsg(this);
        // setTimeout(()=>{
        //     this.run();
        // },500)
    },
    beforeDestroy(){
        this.clear();
    }
}
</script>

<style lang="scss">

.q-chat-main{
    background-color: #f2f2f2;
    height: 100vh;
    position: relative;
    -webkit-overflow-scrolling: touch;/* 解决ios滑动不流畅问题 */
    .body{
        overflow: auto;
        // padding: 0 10px;
        height: calc(100vh - 50px);
    }
    .message-container,.message-right-container{
        padding:10px;
        display: flex;
        .head-portrait{
            width: 41px;
            height: 41px;
            border-radius: 6px;
        }
        .pure-picture{
            max-width: 210px;
        }
        .text-picture{
            width:90%;
            height:210px
        }
        .message-box{
            padding:0 10px;
            width: 100%;
            >span{
                font-size: 12px;
                padding:0 2px;
                display: block;
            }
            .imageText{
                position: relative;
                .floatText{
                    position:absolute; 
                    bottom:7px; 
                    left:0px; 
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 90%;
                    font-size: 13px;
                    box-sizing:border-box;
                    padding:5px 10px;
                    background:rgba(0,0,0,0.5);
                    color: #fff;
                }
            }
        }
        .message-content{
            position: relative;
            display: inline-block;
            word-break: break-all;
            background: #fff;
            text-align: left;
            padding: 6px 12px;
            max-width: 75%;
            min-height: 25px;
            border: 1px solid #e1e1e1;
            border-radius: 5px;
        }
    }
    .message-right-container{
        justify-content: flex-end;
        .message-from{
            order: 1;
            margin-right: 0;
        }
        .message-content{
            background: #9EEA6A;
        }
        .message-box{
        text-align: right;
        }
    }
    .chat-send-btn{
        background: #fff;
        position: fixed;
        bottom: 0;
        left:0;
        width: 100%;
        border-top: 1px solid #d8d8d8;
        .weui-input{
            width: 95%;
            color: #282828;
            border-bottom: 1px solid #19ad15;
        }
        .send-btn{
            background: #19ad15;
            color: #fff;
        }
    }
}
.triangle-left-inner, .triangle-left-outer{
    content: "";
    position: absolute;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
}
.triangle-left-outer{
    left: -8px;
    border-right: 8px solid #e1e1e1;
    top: 13px;
}
.triangle-left-inner{
    left: -7px;
    border-right: 10px solid #fff;
    top: 13px;
}
.triangle-right-inner, .triangle-right-outer{
    content: "";
    position: absolute;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
}
.triangle-right-inner{
    right: -7px;
    border-left: 10px solid #9fe658;
    top: 13px;
}
.triangle-right-outer{
    right: -8px;
    border-left: 10px solid #9fe658;
    top: 13px;
}
</style>
