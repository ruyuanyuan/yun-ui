import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/public.css';
import Yuni from 'yuni-ui'
import 'yuni-ui/lib/yuni.css'
Vue.use(Yuni)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
