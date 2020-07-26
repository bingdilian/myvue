// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
 /* eslint-disable */
// eslint-disable-next-line
import App from './App';
import Vue from 'vue';
import ElementUI from 'element-ui';
import animate from 'animate.css';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';

import md5 from 'js-md5';




Vue.config.productionTip = false;
Vue.use (ElementUI);
Vue.use (animate);
Vue.use(Vuex);

Vue.prototype.$md5 = md5;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
