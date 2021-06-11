<template>
  <div>
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/front/Nav.vue";
import Footer from "@/components/front/Footer.vue";

export default {
  name: "Front",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="scss">
* {
  font-size: 16px;
  font-family: "Open Sans Condensed", sans-serif;
}
html {
  min-height: 100%;
  position: relative;
}
body {
  margin-bottom: 100px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
}
button {
  transition: all 0.5s;
}
.table-wrap {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
.animated {
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: both;
}
.fadeInUp {
  animation-name: fadeInUp;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, -25%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
