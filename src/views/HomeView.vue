<script setup>
import { usePostsStore } from "@/stores/posts";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import PostItem from "@/components/PostItem.vue";
import MyWrapper from "@/components/MyWrapper.vue";

const postsStore = usePostsStore();
const postFilter = ref("all");

const setPostFilter = () => {
  postFilter.value = postFilter.value === "all" ? "saved" : "all";
};
</script>

<!-- <script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem,
  },
  setup() {
    const posts = [
      {
        id: 1,
        title: "The Rise of Remote Work: Navigating the New Normal",
        body: "The COVID-19 pandemic has fundamentally changed the way we work, with a significant shift towards remote and hybrid work models. This post explores the challenges and opportunities of this transition, and provides insights on how companies and employees can adapt to the new normal.",
        date: "2022-03-15",
        author: "Jane Smith",
        created_at: "2022-03-15",
        is_saved: false,
      },
    ];
    return {
      posts,
    };
  },
};
</script> -->
<template>
  <div class="header">
    <div>
      <h3>
        {{ postFilter === "all" ? "All posts" : "Saved posts" }}
      </h3>
      <span class="material-icons" v-show="loading">cached</span>
    </div>
    <button @click="setPostFilter">
      {{ postFilter === "all" ? "Show saved posts" : "Show all posts" }}
    </button>
  </div>
  <div v-if="postFilter === 'all'">
    <div v-for="post in sorted" :key="post.id">
      <MyWrapper>
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>

  <div class="error" v-if="posts.errMsg">{{ postsStore.errMsg }}</div>

  <div v-if="postFilter === 'saved'">
    <div v-for="post in saved" :key="post.id">
      <MyWrapper>
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      animation: spin 1s linear infinite;
    }
  }
  button {
    color: #fff;
    background: #1e40af;
    padding: 4px 15px;
    border-radius: 5px;
    &:hover {
      background: #0ea5e9;
    }
  }
}

.error {
  margin: 2rem;
  background: #f87171;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
