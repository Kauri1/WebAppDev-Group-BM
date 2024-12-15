import { createRouter, createWebHistory } from 'vue-router';
import SignupPage from '../views/SignupPage.vue';
import HomePage from '../views/HomePage.vue';
import AddPostPage from '../views/AddPost.vue';
import PostDetailsPage from '../views/PostDetails.vue';
import LoginPage from '../views/LoginPage.vue';
import ContactsPage from '../views/ContactsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/addpost', component: AddPostPage },
  { path: '/post/:id', component: PostDetailsPage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage},
  { path: '/contacts', component: ContactsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
