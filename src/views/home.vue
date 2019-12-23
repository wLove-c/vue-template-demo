<template>
  <div @click="go">Home</div>
</template>

<script>
import { get } from "@/api";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {},
  methods: {
    go() {
      get().then(res => {
        console.log(res);
      });
      this.$router.push({ path: "/statistic" });
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
