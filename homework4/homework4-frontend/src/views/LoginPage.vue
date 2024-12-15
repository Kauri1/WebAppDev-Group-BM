<template>
  <div class = "view-container">
    <div class = "container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>

    <div class="signup-link">
      <p><button @click="goToSignup" class="signup-btn">Sign Up</button></p>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: this.email,
          password: this.password,
        });
        
        localStorage.setItem('token', response.data.token);

        this.$router.push('/');
      } catch (error) {
        console.error('Login failed:', error);
        alert('Invalid credentials!');
      }
    },

    goToSignup() {
      this.$router.push('/signup');
    }
  },
};
</script>
