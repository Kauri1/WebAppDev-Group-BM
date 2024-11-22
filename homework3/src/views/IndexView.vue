<template>
    <div>
        <h1>This is the index page!</h1>
    </div>

    <div class="container">
        <div class="left"></div>
        <div class="post-column" id="posts-container"></div>
        <div class="right"></div>
    </div>

    <PageFooter/>
</template>


<script>

import PageFooter from "@/components/Footer.vue";

export default {
    name: "IndexView",
    components: {
        PageFooter
    },
}

const jsonURL = '/my.json'; // Example for local JSON file

//const jsonURL = "https://api.npoint.io/2f3b068c9146625fc960"  // Example of JSON file hosted on a server
// edit at if not locked jet https://www.npoint.io/docs/2f3b068c9146625fc960

// Fetch JSON data from the server
async function fetchPosts() {
    try {
        const response = await fetch(jsonURL);
        const data = await response.json();
        displayPosts(data.posts); // Assumes JSON structure has a key 'posts' containing an array
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Function to display posts dynamically in the HTML
function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = ''; // Clear container before adding new content

    posts.forEach(post => {
        // Create the HTML structure for each post
        const postElement = document.createElement('div');
        postElement.className = 'post';

        // Construct post HTML
        postElement.innerHTML = `
            <div class="post-header">
                <img src="${post.profileImage}" alt="Profile Picture" class="profile-pic">
                <div class="user-date">
                    <div class="user">${post.username}</div>
                    <div class="date">${post.date}</div>
                </div>
            </div>
            ${post.postImage ? `<img src="${post.postImage}" alt="Post Image" class="post-image">` : ''}
            <div class="post-text">${post.text}</div>
            <div class="like-button">👍 ${post.likes}</div>
        `;

        container.appendChild(postElement);
    });
}

// Fetch and display posts on page load
fetchPosts();

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