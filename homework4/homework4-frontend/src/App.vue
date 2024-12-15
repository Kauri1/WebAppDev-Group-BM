<template>
  <div class="app-container">
    <AppHeader />
    <div class="container">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/appHeader.vue'; 
import AppFooter from './components/appFooter.vue'; 

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

