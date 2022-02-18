<template>
  <div>
    <PostList />
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList.vue";

export default {
  components: {
    PostList,
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
