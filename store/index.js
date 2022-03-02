import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return (
          context.app.$axios
            // .get("https://nuxt-blog-6369d-default-rtdb.firebaseio.com/posts.json")
            .$get("/posts.json")
            .then((data) => {
              const postsArray = [];
              for (const key in data) {
                postsArray.push({ ...data[key], id: key });
              }
              vuexContext.commit("setPosts", postsArray);
            })
            .catch((e) => {
              console.log(e);
            })
        );
      },
      addPost(vuexContext, postData) {
        const createdPost = {
          ...postData,
          updatedDate: new Date(),
        };

        return this.$axios
          .$post(
            "https://nuxt-blog-6369d-default-rtdb.firebaseio.com/posts.json",
            createdPost
          )
          .then((data) => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: data.name,
            });
          })
          .catch((e) => {
            console.log(e);
          });
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            "https://nuxt-blog-6369d-default-rtdb.firebaseio.com/posts/" +
              // this.$route.params.postId +
              editedPost.id +
              ".json",
            editedPost
          )
          .then((res) => {
            vuexContext.commit("editPost", editedPost);
          })
          .catch((e) => {
            console.log(context.error(e));
          });
      },
      setPosts(vuexContext, payload) {
        vuexContext.commit("setPosts", payload);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
