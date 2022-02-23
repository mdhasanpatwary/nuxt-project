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
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: "1",
          title: "Hello World! (ID: " + context.route.params.id + ")",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          author: "patwary",
          updatedDate: new Date().toDateString(),
          thumbnail:
            "https://images.ctfassets.net/hrltx12pl8hq/zpozZxV0PvBUevOlUkpEK/220a46578f42ba182231eb7d91051f61/04-technology_1218220324.jpg?fit=fill&w=480&h=270",
        },
      });
    }, 1000);
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
