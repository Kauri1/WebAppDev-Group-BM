<template>

    <div class="index-view">
        <div class="container">
            <div class="left"></div>

            <PostContainer/>
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
        resetLikes() {
            this.$store.dispatch('resetLikes'); // Trigger the action to reset all likes
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


</style>