<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
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
.intro {
  text-align: center;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url("~assets/img/bg.jpg");
  margin-bottom: 30px;
}
.intro h1 {
  font-size: 1.5rem;
  color: #000;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px #000;
  border: 1px solid #000;
  box-sizing: border-box;
}
@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
