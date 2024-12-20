import { createRouter, createWebHashHistory } from 'vue-router';

import IndexView from '@/views/IndexView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue';

const routes = [{
    path: '/',
    name: 'IndexView',
    component: IndexView,
},
{
    path: '/login',
    name: 'LoginView',
    component: LoginView,
},
{
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView,
}];



const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;