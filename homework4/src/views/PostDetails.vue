<template>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <button @click="deletePost">Delete Post</button>
      <button @click="goBack">Go Back</button>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        post: null,
      };
    },
    created() {
      this.fetchPostDetails();
    },
    methods: {
      async fetchPostDetails() {
        const token = localStorage.getItem('token');
        if (!token) {
          this.$router.push('/login');
          return;
        }
  
        const postId = this.$route.params.id;
  
        try {
          const response = await axios.get(`http://localhost:5000/api/posts/${postId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.post = response.data;
        } catch (error) {
          console.error('Error fetching post:', error);
          alert('Error fetching post!');
        }
      },
  
      goBack() {
        this.$router.push('/');
      },
  
      async deletePost() {
        const token = localStorage.getItem('token');
        if (!token) {
          this.$router.push('/login');
          return;
        }
  
        const postId = this.$route.params.id;
  
        try {
          const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
  

          console.log(response.data.message);
          this.$router.push('/');
        } catch (error) {
          console.error('Error deleting post:', error);
          alert('Error deleting post!');
        }
      },
    },
  };
  </script>
  