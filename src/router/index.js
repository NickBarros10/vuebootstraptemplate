import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Web2 from '@/components/Web2';
import Web3 from '@/components/Web3';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/Reviews',
      name: 'Web2',
      component: Web2,
    },
    {
      path: '/Pricing',
      name: 'Web3',
      component: Web3,
    },

  ]
});
