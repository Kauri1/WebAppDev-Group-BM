<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Signup</button>
    </form>
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
  async signup() {
    try {

      await axios.post('http://localhost:3000/api/auth/signup', {
        email: this.email,
        password: this.password,
      });

      this.$router.push('/login');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Error during signup!');
    }
  },
},
};
</script>
