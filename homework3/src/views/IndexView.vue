<template>

    <div class="index-view">
        <div class="container">
            <div class="left"></div>

            <PostContainer/>
            <!--
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
                         <!--<div class="like-button">
                            <button @click="likePost(post.id)">👍 {{ post.likes }}</button>
                        </div>-->
                        <div class="like-button" @click="likePost(post.id)">👍 {{post.likes}}</div>
                    </div>
                </div> -->
            <div class="right"></div>
        </div>
        <div class="reset-container">
            <button @click="resetLikes" class="resetLikesButton">Reset Likes</button>
        </div>
    </div>
</template>


<script>
import { mapState } from 'vuex'; // Import Vuex helpers
import PostContainer from '@/components/Post.vue';

export default {
    name: 'IndexView',
    components: {
        PostContainer,
    },
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
.right {
    display: none;
    flex: 1;
    /*text-align: center;*/
    background-color:#c1cd9d;
    border: solid 1px #aab782;
    border-radius: 5px;
}

.left {
    display: none;
    flex: 1; 
    background-color:#c1cd9d;
    border: solid 1px #aab782;
    border-radius: 5px;
}

    /* larger than 500px */
    @media (min-width: 500px) {
        .left, .right {
            display: block;
        }
    }

.post-column {
    flex: 4;
    display: flex;
    flex-direction: column;
    
}




.post-column div {
    flex-grow: 1;
    margin: 0 8px;
    border-radius: 5px;
    background-color:#cfd2c4;
}

.post-column div+div {
    margin-top: 8px;
}

.post {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.post-text {
    margin-bottom: 10px;
}

.post-box {
    font-size: large;
    margin: auto;
    background-color: rgb(209, 209, 209);
    border-radius: 10px;
    max-width: 400px;
    padding: 20px 40px;
    min-width: none;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.post-image {
    width: 100%;
    border-radius: 5px;
    margin: 10px 0;
}

.like-button {
    padding: 10px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s;
    width: 75px;
    align-self: start;
}

.like-button:hover {
    background-color: #a86e16
}
</style>