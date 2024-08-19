<script setup>
import { RouterLink, RouterView } from "vue-router";
import { usePostsStore } from "@/stores/posts";
const postsStore = usePostsStore();
postsStore.getPosts();
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="nav_link">Home</RouterLink>
      <RouterLink to="/post-create" class="nav_link">New Post</RouterLink>
    </nav>
    <RouterView />
  </header>
</template>

<style lang="scss" scoped>
nav {
  padding: 1rem 2rem;
  background: #1e40af;
  border-bottom: 1px solid #60a5fa;
  .nav_link {
    color: #fff;
    margin-right: 5px 15px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    margin-right: 1rem;
    &:hover {
      padding: 0.5rem 1rem;
      background: #60a5fa;
    }
  }
}
</style>
