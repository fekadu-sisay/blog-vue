<script setup>
import { usePostsStore } from "@/stores/posts";
defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const postStore = usePostsStore();
const { deletePost, savePost } = postStore;
</script>
<template>
  <div>
    <div class="header">
      <span>Written by {{ post.author }} on {{ post.created_at }}</span>
      <div>
        <button class="del material-icons" @click="deletePost(post.id)">
          delete
        </button>
        <button class="save material-icons" @click="savePost(post.id)">
          {{ post.is_saved ? "bookmark" : "bookmark_border" }}
        </button>
      </div>
    </div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 1.5rem 1.5rem 1rem;
  color: black;
}

p {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 1.5rem 1.5rem;
  color: #4b5563;
}

.header {
  font-size: 12px;
  background: #0284c7;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 300;

  button {
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  div .del {
    font-size: 20px;
    padding: 8px;
    background: #fff;
    color: #ef4444;
    margin: 8px;

    &:hover {
      background: #ef4444;
      color: #fff;
    }
  }

  div .save {
    font-size: 20px;
    padding: 8px;
    background: #fff;
    color: #04c313;
    margin: 8px;

    &:hover {
      background: #04c313;
      color: #fff;
    }
  }
}
</style>
