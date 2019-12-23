<template>
  <div @click="go">Statistic</div>
</template>

<script>
import { post } from "@/api";
export default {
  name: "Statistic",
  data() {
    return {};
  },
  methods: {
    go() {
      post().then(res => {
        console.log(res);
      });
      this.$router.push({ path: "/" });
    }
  },

  mounted() {}
};
</script>
<style lang="scss" scoped>
.loading {
  min-height: 100vh;
}
</style>
