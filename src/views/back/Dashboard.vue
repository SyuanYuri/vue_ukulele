<template>
  <div>
    <Navbar />
    <Alert />
    <div class="container-fluid">
      <div class="grid grid-rows-1 md:grid-rows-2 md:grid-flow-col gap-1 md:gap-3 px-3">
        <Sidebar />
        <main class="row-span-1 col-span-1 md:row-span-2 md:col-span-2 table-wrap md:mx-10">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/back/Navbar.vue";
import Sidebar from "@/components/back/Sidebar.vue";
import Alert from "@/components/AlertMessage.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    Alert,
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)Token\s*=\s*([^;]*).*$)|^.*$/, "$1");
    this.$http.defaults.headers.common.Authorization = `${token}`;
  },
};
</script>

<style scoped>
.table-wrap {
  display: block;
  overflow-x: hidden;
  white-space: nowrap;
}
</style>
