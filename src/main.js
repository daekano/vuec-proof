// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuec from 'vue-container';
import App from './App';
import Service from './services/service';

Vue.use(Vuec);

Vue.$ioc.register('Service', Service);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
