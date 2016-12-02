export default(App)=>{

  let VueRouter = require('vue-router');
  let router = new VueRouter({
    hashbang: false,
    history: true,
    root: '/'
  })

  router.map({

    '/':{
      component:require('./components/main/main')
    },
    '/helpcenter':{
      component:require('./components/pagecomponents/helpcenter/helpcenter.vue')
    },
    '/news':{
      component:require('./components/pagecomponents/news/news.vue')
    },
    '/memberjoin':{
      component:require('./components/pagecomponents/memberjoin/memberjoin.vue')
    }
  })

  router.start(App,'#app');

}
