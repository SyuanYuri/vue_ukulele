<template>
  <div class="sticky-top">
    <header class="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        UKULELE
      </a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click="signout()">登出</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      const vm = this;
      const api = "https://vue-course-api.hexschool.io/logout";
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Open Sans Condensed", sans-serif;
}
header > a {
  letter-spacing: 4px;
  font-size: 25px;
}
.navbar-brand {
  margin-right: 0;
}
</style>
