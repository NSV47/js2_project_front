<template>
  <div>
    <layout></layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout.vue";
export default {
  name: "App",

  components: {
    Layout
  },

  data: () => ({
    page: "news"
  })
};
</script>
