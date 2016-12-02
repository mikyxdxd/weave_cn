import Vue from 'vue';
import VueRouter from 'vue-router';
require('./assets/typo.css')
Vue.use(VueRouter);
let app =Vue.extend({
  components:{
    w_header:require('./components/header/header.vue'),
    w_footer:require('./components/footer/footer.vue')
  }
});
import route from './route';
route(app);

