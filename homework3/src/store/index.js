import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      posts: [
        {
          id: 1,
          username: "ladiesman217",
          date: "Oct 1, 2024",
          profileImage: "images/profile1.png",
          postImage: "images/post1.jpg",
          text: "This is a very nice fountain",
          likes: 0,
        },
        {
          id: 2,
          username: "sonicHedgehog01",
          date: "Oct 2, 2024",
          profileImage: "images/profile2.png",
          postImage: "images/post2.jpg",
          text: "Don't come here food is not good",
          likes: 0,
        },
        {
          id: 3,
          username: "AnonymousUser",
          date: "Oct 3, 2024",
          profileImage: "images/profile2.png",
          postImage: null,
          text: "I can't find my glasses :.( One like = one prayer",
          likes: 0,
        },
        {
          id: 4,
          username: "GirlPower999",
          date: "Oct 3, 2024",
          profileImage: "images/profile3.png",
          postImage: "images/post3.jpg",
          text: "Very nice building, I wonder what's inside.",
          likes: 0,
        },
        {
          id: 5,
          username: "p0landNumber1",
          date: "Oct 4, 2024",
          profileImage: "images/profile4.png",
          postImage: "images/post4.jpg",
          text: "This building looks real expensive.",
          likes: 0,
        },
        {
          id: 6,
          username: "2cool4skool",
          date: "Oct 5, 2024",
          profileImage: "images/profile5.png",
          postImage: "images/post5.jpg",
          text: "Rate my base",
          likes: 0,
        },
        {
          id: 7,
          username: "travelJunkie123",
          date: "Oct 6, 2024",
          profileImage: "images/profile1.png",
          postImage: "images/post6.jpg",
          text: "Found a hidden beach today! So peaceful.",
          likes: 0,
        },
        {
          id: 8,
          username: "chefMasterX",
          date: "Oct 7, 2024",
          profileImage: "images/profile1.png",
          postImage: "images/post7.jpg",
          text: "My latest creation: Truffle pasta!",
          likes: 0,
        },
        {
          id: 9,
          username: "nature4life",
          date: "Oct 8, 2024",
          profileImage: "images/profile1.png",
          postImage: "images/post8.jpg",
          text: "Nothing beats a good sunrise hike.",
          likes: 0,
        },
        {
          id: 10,
          username: "gamerZ_01",
          date: "Oct 9, 2024",
          profileImage: "images/profile1.png",
          postImage: null,
          text: "New high score! Nobody can beat me!",
          likes: 0,
        },
      ],
    };
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  mutations: {
    // Mutation to increment the likes of a post by its ID
    incrementLikes(state, postId) {
      const post = state.posts.find(p => p.id === postId); // Find the post by its ID
      if (post) {
        post.likes++; // Increment the like count
      }
    }
  },
  actions: {
    // Action to call the mutation and increment the likes
    incrementLikes({ commit }, postId) {
      commit('incrementLikes', postId); // Commit the mutation to update the state
    }
  },
  modules: {},
});
