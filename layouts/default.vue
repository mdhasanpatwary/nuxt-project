<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav @close="displaySidenav = false" :show="displaySidenav" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSidenav from "@/components/Navigation/TheSidenav.vue";

export default {
  // middleware: "log",
  components: {
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
};
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
  padding: 0;
}
</style>
