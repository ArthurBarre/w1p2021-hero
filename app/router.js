import Vue from 'vue';
import Router from 'vue-router';

import Home from './page/Home.vue';
import Page from './page/Page.vue';
import Game from './page/Game.vue';
import Win from './page/Win.vue';
import Loose from './page/Loose.vue';
import Dev from './page/Dev.vue';

import Recaps from './components/Recaps.vue';
import Expeditions from './components/Expeditions.vue';
import Ressources from './components/Ressources.vue';
import Crafts from './components/Crafts.vue';

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
      path: '/game:id',
      name: 'game',
      component: Game,
    },
    {
      path: '/game/Recap',
      name: 'Recap',
      component: Recaps
    },
    {
      path: '/game/Expeditions',
      name: 'Expeditions',
      component: Expeditions
    },
    {
      path: '/game/Ressources',
      name: 'Ressources',
      component: Ressources
    },
    {
      path: '/game/Craft',
      name: 'Craft',
      component: Crafts
    },
    {
      path: '/win',
      name: 'win',
      component: Win,
    },
    {
      path: '/game/Loose',
      name: 'Lose',
      component: Loose,
    }, {
      path: '/dev',
      name: 'dev',
      component: Dev,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
