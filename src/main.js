import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/public.css';
import Yuni from 'yuni-ui'
import 'yuni-ui/lib/yuni.css'
Vue.use(Yuni)
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
