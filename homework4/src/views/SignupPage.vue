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
    const response = await axios.post('http://localhost:3000/api/signup', {
      email: this.email,
      password: this.password,
    }, { withCredentials: true });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    this.$router.push('/');
  } catch (error) {
    console.error('Signup failed:', error);
    alert('Error during signup!');
  }
}
}
};
</script>
