<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";

export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return context.app.$axios
      .$get("/posts/" + context.params.postId + ".json")
      .then((data) => {
        return { loadedPost: { ...data, id: context.params.postId } };
      })
      .catch((e) => {
        console.log(context.error());
      });
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768) {
  .update-form {
    width: 500px;
  }
}
</style>
