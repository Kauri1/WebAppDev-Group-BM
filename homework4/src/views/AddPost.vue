<template>
  <div>
    <h2>Add a New Post</h2>
    <form @submit.prevent="addPost">
      <input v-model="title" type="text" placeholder="Title" required />
      <textarea v-model="body" placeholder="Body" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    async addPost() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/login');
        return;
      }

      try {
        await axios.post(
          'http://localhost:3000/api/posts',
          {
            title: this.title,
            body: this.body,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        this.$router.push('/');
      } catch (error) {
        console.error('Error adding post:', error);
        alert('Error adding post!');
      }
    },
  },
};
</script>
