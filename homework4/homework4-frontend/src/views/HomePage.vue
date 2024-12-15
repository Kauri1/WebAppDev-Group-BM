<template>
  <div class = "view-container">
    <div class = "container">
    <h2>Your Posts</h2>
    
    <button @click="goToAddPostPage">Add Post</button>

    <div v-if="posts.length > 0">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
          <button @click="goToPostDetails(post.id)">View Post</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No posts to display. Add some posts!</p>
    </div>

    <button @click="deleteAllPosts">Delete All Posts</button>

    <button @click="logout">Log Out</button>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/login');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/posts', {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.posts = response.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
        alert('Error fetching posts!');
      }
    },

    goToAddPostPage() {
      this.$router.push('/addpost');
    },

    goToPostDetails(postId) {
      this.$router.push(`/post/${postId}`);
    },

    async deleteAllPosts() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/login');
        return;
      }

      try {
        await axios.delete('http://localhost:5000/api/posts', {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.fetchPosts();
      } catch (error) {
        console.error('Error deleting all posts:', error);
        alert('Error deleting all posts!');
      }
    },

    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>
