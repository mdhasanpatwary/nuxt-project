<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      title="Hello World!"
      previewText="preview Text"
      thumbnail="https://images.ctfassets.net/hrltx12pl8hq/zpozZxV0PvBUevOlUkpEK/220a46578f42ba182231eb7d91051f61/04-technology_1218220324.jpg?fit=fill&w=480&h=270"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      title="Hello World! 2"
      previewText="preview Text 2"
      thumbnail="https://images.ctfassets.net/hrltx12pl8hq/zpozZxV0PvBUevOlUkpEK/220a46578f42ba182231eb7d91051f61/04-technology_1218220324.jpg?fit=fill&w=480&h=270"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      title="Hello World! 3"
      previewText="preview Text 3"
      thumbnail="https://images.ctfassets.net/hrltx12pl8hq/zpozZxV0PvBUevOlUkpEK/220a46578f42ba182231eb7d91051f61/04-technology_1218220324.jpg?fit=fill&w=480&h=270"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/posts/PostsPreview.vue";

export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
