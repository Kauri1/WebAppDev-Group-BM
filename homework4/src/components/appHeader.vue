<template>
  <header>
    <div class="header-content">
      <h1 @click="goToHome" class="clickable">PostIt</h1>
      <div class="nav-buttons">
        <button @click="goToHome" class="nav-btn">Home</button>
        <button @click="goToContacts" class="nav-btn">Contact Us</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'appHeader',
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    goToContacts() {
      this.$router.push('/contacts');
    },
  },
};
</script>

