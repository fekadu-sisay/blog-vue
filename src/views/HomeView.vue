<script setup>
import PostItem from "@/components/PostItem.vue";
import MyWrapper from "@/components/MyWrapper.vue";
import { usePostsStore } from "@/stores/posts";
import { storeToRefs } from "pinia";
const postsStore = usePostsStore();
const { sorted } = storeToRefs(postsStore);
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
  <div v-for="post in sorted" :key="post.id">
    <MyWrapper>
      <PostItem :post="post" />
    </MyWrapper>
  </div>
</template>
