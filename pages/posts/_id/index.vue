<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last Updated on {{ loadedPost.updatedDate }}
        </div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-domail.com">feedback@my-domail.com</a>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get("/posts/" + context.params.id + ".json")
      .then((data) => {
        return { loadedPost: data };
      })
      .catch((e) => {
        console.log(context.error(e));
      });
  },
};
</script>

<style scoped>
.single-post-page {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768) {
  .single-post-page {
    width: 500px;
  }
}
</style>
