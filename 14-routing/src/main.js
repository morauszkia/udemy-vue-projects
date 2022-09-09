import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'teams', path: '/', redirect: '/teams' },
    // { path: '/teams', component: TeamsList, alias: '/' },
    {
      name: 'team-members',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [{ path: ':teamId', component: TeamMembers, props: true }],
    },
    {
      name: 'users',
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
    },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
