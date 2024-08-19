import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts-store", {
  // Data
  state() {
    return {
      posts: [],
      loading: true,
      errMsg: "kfjsdkfj",
    };
  },
  // computed
  getters: {
    sorted() {
      return this.posts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      );
    },
    saved: (state) => {
      return state.posts
        .filter((post) => post.is_saved)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    },
    // sorted: (state) =>
    //   state.posts.sort(
    //     (a, b) => new Date(b.created_at) - new Date(a.created_at),
    //   ),
  },
  // methods
  actions: {
    getPosts() {
      fetch("http://localhost:8000/posts")
        .then((res) => res.json())
        .then((data) => {
          this.posts = data;
          this.loading = false;
        })
        .catch((err) => {
          this.errMsg = "Something went wrong";
          console.log(err);
        });
    },
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: "Don John",
        created_at: new Date().toLocaleDateString(),
        is_saved: false,
      });
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    savePost(id) {
      const post = this.posts.find((post) => post.id === id);
      post.is_saved = !post.is_saved;
    },
  },
});
