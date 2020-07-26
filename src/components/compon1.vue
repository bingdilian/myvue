<!--
 * @Author: your name
 * @Date: 2020-07-22 18:44:32
 * @LastEditTime: 2020-07-25 23:34:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myvue\src\components\compon1.vue
 /* eslint-disable */
// eslint-disable-next-line
-->


<template>
  <div class="info">
    <h1 style="margin-top:0">基本资料</h1>
    <transition
      :duration="{enter:2500,leave:1000}"
      leave-active-class="animated rotateOut"
      enter-active-class="animated rotateInUpRight"
    >
      <div class="cont" v-if="show">
        <img class="avatar" src="../../static/img/2.jpg" alt />
        <h2 class="minzi">人生的目的在于学习</h2>
        <p class="minzi">我叫吴文彬</p>
        <p class="minzi">一年半前端开发经历</p>
        <div class="state">
          <el-row :gutter="30">
            <template v-for="item in states">
              <el-col :span="6" :xs="12" :key="item.icon">
                <div class="inconBox">
                  <i class="iconfont iconSet" :class="item.icon"></i>
                </div>
                <p v-text="item.val" class="minzi"></p>
              </el-col>
            </template>
          </el-row>
        </div>

        <!-- 跑马灯 -->
        <div>
          <template>
            <div class="index">
              <!-- 跑马灯  -->
              <div>
                <el-carousel :interval="4000" type="card" height="200px">
                  <el-carousel-item v-for="item in imgList" :key="item.id">
                    <img :src="item.idView" class="image" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>



<script>
import CryptoJS from "crypto-js";

export default {
  //加密
  encrypt(word, keyStr) {
    keyStr = keyStr ? keyStr : "absoietlj32fai12";
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  },
  //解密
  decrypt(word, keyStr) {
    keyStr = keyStr ? keyStr : "absoietlj32fai12";
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    var decrypt = CryptoJS.AES.decrypt(word, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  },
  name: "index",
  data() {
    return {
      show: false,
      states: [
        { icon: "icon-nianling", val: "年龄/24" },
        { icon: "icon-xueli", val: "学历/大专" },
        { icon: "icon-icon-", val: "坐标/杭州" },
        { icon: "icon-zhiwei", val: "状态/离职" },
      ],
      imgList: [
        { id: 0, idView: "../../static/img/20200725170103.jpg" },
        { id: 1, idView: "../../static/img/20200725170117.jpg" },
        { id: 2, idView: "../../static/img/20200725170120.jpg" },
        { id: 3, idView: "../../static/img/20200725170127.jpg" },
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
    margin: 20px auto;
    background-color: rgba(233, 255, 255, 0.3);
    border-radius: 25px;
    .minzi {
      font-size: 24px;
      font-family: "STXingkai";
      font-weight: 900;
    }
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 60px;
      margin-top: 20px;
    }
    .state {
      padding: 20px 10px 50px;
      .iconBox {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        border: 1px solid rgba(9, 92, 49, 0.5);
        margin: 5px auto;
        background-color: rgba(13, 73, 87, 0.4);
        &:hover {
          background-color: rgba(13, 73, 87, 0.8);
        }
        .iconSet {
          font-size: 3rem;
          line-height: 80px;
          color: rgba(220, 228, 220, 0.7);
          &:hover {
            color: rgba(220, 228, 220, 1);
          }
        }
      }
    }
  }
}

.index {
  margin-top: 100px;
  width: 100%;
  text-align: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.image {
  width: 100%;
  height: 100%;
}
</style>

