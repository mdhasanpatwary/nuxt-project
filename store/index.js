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
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "Hello World!",
                previewText: "preview Text",
                thumbnail:
                  "https://images.ctfassets.net/hrltx12pl8hq/zpozZxV0PvBUevOlUkpEK/220a46578f42ba182231eb7d91051f61/04-technology_1218220324.jpg?fit=fill&w=480&h=270",
              },
              {
                id: "2",
                title: "Hello World! 2",
                previewText: "preview Text 2",
                thumbnail:
                  "https://images.ctfassets.net/hrltx12pl8hq/zpozZxV0PvBUevOlUkpEK/220a46578f42ba182231eb7d91051f61/04-technology_1218220324.jpg?fit=fill&w=480&h=270",
              },
              {
                id: "3",
                title: "Hello World! 3",
                previewText: "preview Text 3",
                thumbnail:
                  "https://images.ctfassets.net/hrltx12pl8hq/zpozZxV0PvBUevOlUkpEK/220a46578f42ba182231eb7d91051f61/04-technology_1218220324.jpg?fit=fill&w=480&h=270",
              },
            ]);
            resolve();
          }, 1500);
        })
          .then((data) => {
            context.store.commit("setPosts", data.loadedPosts);
          })
          .catch((e) => {
            context.error(e);
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
