<template>

    <div class="index-view">
    
        <div>
            <h1>This is the index page!</h1>
        </div>
        <div class="container">
            <div class="left"></div>
                <div id="posts-container" class="post-column">
                    <div v-for="post in posts" :key="post.id" class="post">
                        <div class="post-header">
                            <img :src="post.profileImage" alt="Profile Picture" class="profile-pic">
                            <div class="user-date">
                                <div class="user">{{ post.username }}</div>
                                <div class="date">{{ post.date }}</div>
                            </div>
                        </div>
                        <img v-if="post.postImage" :src="post.postImage" alt="Post Image" class="post-image">
                        <div class="post-text">{{ post.text }}</div>
                        <div class="like-button">
                            <button @click="likePost(post.id)">👍 {{ post.likes }}</button>
                        </div>
                    </div>
                </div>
            <div class="right"></div>
        </div>
        <div class="reset-container">
            <button @click="resetLikes" class="resetLikesButton">Reset Likes</button>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex'; // Import Vuex helpers

export default {
    name: 'IndexView',
    computed: {
        ...mapState(['posts']), // Access posts from Vuex state
    },
    methods: {
        likePost(postId) {
            this.$store.dispatch('incrementLikes', postId); // Trigger the action to increment likes
        },
        resetLikes() {
            this.$store.dispatch('resetLikes'); // Trigger the action to reset all likes
        },
        testClick() {
            console.log('Button clicked!');
        },
        
    },
};

</script>




<style scoped>
* {
    font-family: 'Courier New', Courier, monospace;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    line-height: 1.5;
    margin: 5px;
    justify-content: center;
}
</style>