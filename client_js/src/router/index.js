import Vue from 'vue';
import Router from 'vue-router';
import { authService } from '../services/auth';
import Login from '../components/Login.vue';
import User from '../components/User.vue'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            component: User,
            children: [
                {
                    path: '/',
                    name: 'user',
                    component: User,
                },
            ],
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
    ]
  });

router.beforeEach((to, from, next) => {
    if (to.name !== 'login') {
        if (!authService.isAuthenticated()) {
            next('/login');
        }
    } else {
        const authBool = authService.isAuthenticated();
        if (authBool) {
            next('/');
        }
    }
    next();
});
