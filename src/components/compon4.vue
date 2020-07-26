<!--
 * @Author: your name
 * @Date: 2020-07-22 18:45:13
 * @LastEditTime: 2020-07-23 16:54:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\components\compon4.vue
 /* eslint-disable */
// eslint-disable-next-line
-->
<template>
  <div class="info">
    <h1  style="margin-top:0">联系我/Contact</h1>
    <transition
    :duration="{enter:2500,leave:1500}"
    leave-active-class="animated rotateOutDownLeft"
    enter-active-class="animated rotateInDownRight"

    >
      <div class="cont" v-if="show">
        <div class="assessment">
          <h2>自我评价</h2>
          <p>一年开发经验，有过四个项目经验</p>
          <p>能够快速的开发网页，熟悉主流框架,适应力强，能适应高压环境</p>
          <p>较强的学习能力，对自己不掌握的技术能快速学习</p>
          <p>喜欢浏览掘金等技术类网站，接触新技术</p>
          <p>当过五年兵</p>
        </div>
        <div class="honor">

        </div>
        <div class="contact">
          <h2>联系我</h2>
          <p>
            <i class="iconfont icon-shouji"></i> 15700001854
          </p>
          <p>
            <i class="iconfont icon-youxiang"></i> 596900641@qq.com
          </p>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        timeout(){
            setTimeout(()=>{
                this.show=true
            },1000)
        }
    },
    mounted () {
        this.timeout();
    }
}
</script>

