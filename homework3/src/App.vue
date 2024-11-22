<template>
  <div>
    <PageHeader/>

    <!--
    <nav>
      <router-link to="/">Index</router-link>|
      <router-link to="/LoginView">Login</router-link>
    </nav>
    -->
    <main>
      <router-view/>
    </main>
    <PageFooter/>
  </div>
</template>

<script>
import PageFooter from "./components/Footer.vue";
import PageHeader from "./components/Header.vue";

export default {
    name: "IndexView",
    components: {
        PageFooter,
        PageHeader
    },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
