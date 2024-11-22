<template>
    <header class="header">
        <ul class="nav">
            <router-link to="/">Home</router-link>
            <!--<router-link to="/login">Login</router-link>-->
            <router-link to="/signup">Signup</router-link>
        </ul>
    </header>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>