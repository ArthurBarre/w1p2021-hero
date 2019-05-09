import Vue from 'vue';
import Router from 'vue-router';

import Home from './page/Home.vue';
import Page from './page/Page.vue';
import Game from './page/Game.vue';
import Win from './page/Win.vue';
import Lose from './page/Lose.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
