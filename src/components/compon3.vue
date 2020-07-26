<!--
 * @Author: your name
 * @Date: 2020-07-22 18:45:06
 * @LastEditTime: 2020-07-22 18:45:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\components\compon3.vue
 /* eslint-disable */
// eslint-disable-next-line
-->
<template>
  <div class="info">
    <h1  style="margin-top:0">作品集/Profile</h1>
    <transition
    :duration="{enter:2500,leave:1500}"
    leave-active-class="animated rotateOut"
    enter-active-class="animated bounceIn">

      <div class="cont" v-if="show">
        <el-row :gutter="20">
          <template v-for="item in Profiles">
            <el-col :span="12" :xs="24" :key="item.name">
              <div class="item">
                <h2 v-text="item.name"></h2>
                <p v-text="'技术栈:' + item.skills"></p>
                <p v-text="item.content"></p>
                <p v-text="'网址:' + item.wangzhi"></p>
              </div>
            </el-col>
          </template>
        </el-row>
      </div>

    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      Profiles: [
        {
          name: "HEINER",
          skills: "jQuery js swiper",
          content:
            "我在整个项目中负责网站首页的三个轮播图效果和产品展示页面。利用jQuery来完成轮播图的效果。",
          wangzhi: "http://zjrealsun.com/"
        },
        {
          name: "港亨电器",
          skills: "jQuery js swiper ",
          content:
            "我在这个项目中负责产品中心和新闻资讯，头部和底部都是由写主页的人完成后我再动态插入，主要内容就是基本的动画效果。",
          wangzhi: "http://hkghztx.cn/"
        },
        {
          name: "左邻右送+App",
          skills:
            "swiper,js，ajax，jQuery ，layer插件，cookie,Vue+Vue-router+Vue+axios,git",
          content:
            "我在整个项目中负责购物车的页面，帮助中心和登录，使用了VUE框架，ui组件进行页面构建，使用项目的数据调用和路由配置，使用ajax实现数据交互，可以快速登录，普通登录和动态密码登录，来提高用户体验。用git来进行版本控制。",
          wangzhi: "http://www.zuolinyousong.cn/"
        },
        {
          name: "金蚕网丝棉被商城+App",
          skills:
            "js，ajax，jquery，cookie，swiper，Vue+Vue-router+Vue+axios, git",
          content:
            "我在整个项目中负责购物车的页面，帮助中心和登录，使用了VUE框架，element-ui组件进行页面构建，使用项目的数据调用和路由配置，使用ajax实现数据交互，可以快速登录，普通登录和动态密码登录，来提高用户体验。用git来进行版本控制。",
          wangzhi: "http://www.myesilk.com/"
        },
      ],
    };
  },
  methods: {
    timeout() {
      setTimeout(() => {
        this.show = true;
      }, 1000);
    },
  },
  mounted() {
    this.timeout();
  },
};
</script>

<style lang="less" scoped>
@import "../less/index.less";
.info {
  .info;
  .cont {
    .cont;
    width: 90%;
    .item {
      background-color: rgba(59, 123, 13, 0.2);
      padding: 10px;
      border-radius: 15px;
      margin: 10px auto;
      @media screen and(max-width: 768px) {
        padding: 5px;
        margin: 5px auto;
      }
      &:hover {
        border-radius: 25px;
        background-color: rgba(10, 135, 87, 0.3);
      }
      p {
        text-align: left;
        text-indent: 28px;
        font-size: 1.1rem;
        line-height: 1.2;
        @media screen and(max-width: 768px) {
          text-indent: 12px;
          font-size: 0.7rem;
          line-height: 1.1;
        }
      }
    }
  }
}
</style>
