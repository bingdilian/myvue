/* eslint-disable */
// eslint-disable-next-line

<template>
  <div
    class="resume"
    @mousewheel="mouse"
    :style="{
    backgroundImage:`url(${img})`,
    height: `${clientHeight}`
  }"
  >
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      :leave-active-class="'animated ' + leaveanimate"
      :enter-active-class="'animated ' + enteranimate"
    >
      <div class="section" :style="{height: `${clientHeight}`}" v-if="init === 1">
        <div class="sec">
          <Con1></Con1>
        </div>
      </div>
    </transition>
    <transition
      :duration="{ enter: 2500, leave: 1500 }"
      :leave-active-class="'animated ' + leaveanimate"
      :enter-active-class="'animated ' + enteranimate"
    >
      <div class="section" :style="{height: `${clientHeight}`}" v-if="init === 2">
        <div class="sec">
          <Con2></Con2>
        </div>
      </div>
    </transition>
    <transition
      :duration="{ enter: 1500, leave: 1500 }"
      :leave-active-class="'animated ' + leaveanimate"
      :enter-active-class="'animated ' + enteranimate"
    >
      <div class="section" :style="{height: `${clientHeight}`}" v-if="init === 3">
        <div class="sec">
          <Con3></Con3>
        </div>
      </div>
    </transition>
    <transition
      :duration="{ enter: 1500, leave: 1500 }"
      :leave-active-class="'animated ' + leaveanimate"
      :enter-active-class="'animated ' + enteranimate"
    >
      <div class="section" :style="{height: `${clientHeight}`}" v-if="init === 4">
        <div class="sec">
          <Con4></Con4>
        </div>
      </div>
    </transition>
    <!-- 下方的下一页按钮 -->
    <div class="next">
      <i class="iconfont icon-xiala setarrow" @click="nextPage"></i>
    </div>
  </div>
</template>

<script>

import Con1 from '@/components/compon1'
import Con2 from '@/components/compon2'
import Con3 from '@/components/compon3'
import Con4 from '@/components/compon4'

import crypto from 'crypto'

export default {
  components: {
    Con1,
    Con2,
    Con3,
    Con4
  },
  data () {
    return {
      // ..
      img: require('../../static/img/1.jpg'),
      clientHeight: '900px',
      init: 1,
      lastscroll: 0,
      leaveanimate: 'rotateOutUpRight',
      enteranimate: 'rotateInDownLeft'
    }
  },
  methods: {
    mouse (event) {
      // 防止用户短时间内滚动多次，设置滚动间隔大于一秒才能生效
      // 判断滚动间隔时间
      let scrollduration = event.timeStamp - this.lastscroll
      console.log(scrollduration)
      if (scrollduration > 1000) {
        // 将这一次的滚动时间记录为上一次合法的滚动时间
        this.lastscroll = event.timeStamp
        console.log('合法的滚动')
        // 判断滚动方向进行操作
        if (event.deltaY > 0) {
          console.log('down')
          if (this.init === 4) {
            this.init = 1
          } else {
            this.init = this.init + 1
          }
        } else {
          console.log('up')
          if (this.init === 1) {
            this.init = 4
          } else {
            this.init = this.init - 1
          }
        }
      } else {
        // 如果滚动不合法就不做任何操作
        console.log('请爱护你的鼠标不要连续滚动！')
      }
    },
    nextPage () {
      if (this.init === 4) {
        this.init = 1
      } else {
        this.init = this.init + 1
      }
    }
  },
  mounted () {
    this.clientHeight = `${document.documentElement.clientHeight}px`
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度
    window.onresize = () => {
      this.clientHeight = `${document.documentElement.clientHeight}px`
      console.log(this.clientHeight)
    }
  }

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>


</style>
