import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Web2 from '@/components/Web2';
import Web3 from '@/components/Web3';
import More1 from '@/components/More1';
import More2 from '@/components/More2';
import More3 from '@/components/More3';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/Journeys',
      name: 'Web2',
      component: Web2,
    },
    {
      path: '/Pricing',
      name: 'Web3',
      component: Web3,
    },
    {
      path: '/OurStory',
      name: 'More1',
      component: More1,
    },
    {
      path: '/OurMission',
      name: 'More2',
      component: More2,
    },
    { 
      path: '/GoingUpward',
      name: 'More3',
      component: More3,
    },

  ]
});
