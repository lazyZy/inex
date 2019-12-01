import Vue from 'vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ViewUI);


new Vue({
  el: '#app',
  render: h => h(App)
});
