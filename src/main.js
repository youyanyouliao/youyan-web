// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'
import { Message,Notification } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(MetaInfo)
// Vue.use(Message)
// Vue.use(Notification)

Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$store = store;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
})
