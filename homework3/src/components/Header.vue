<template>
    <header class="header">
        <ul class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <!--
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            -->
        </ul>
    </header>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>