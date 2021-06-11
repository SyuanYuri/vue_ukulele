<template>
  <div>
    <div class="container mx-auto p-8 flex font-serif tracking-widest">
      <div class="max-w-md w-full mx-auto">
        <h2 class="text-center mb-12 font-thin">Login</h2>
        <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div class="p-8">
            <form @submit.prevent="signin">
              <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email</label>
                <input v-model="user.username" type="text" id="email" name="email" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none tracking-widest" />
              </div>
              <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label>
                <input
                  v-model="user.password"
                  type="password"
                  id="password"
                  name="password"
                  class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none tracking-widest"
                />
              </div>
              <button type="submit" class="w-full p-3 mt-3 bg-grayish-dark text-white rounded shadow tracking-widest hover:opacity-70">
                登入
              </button>
            </form>
          </div>
          <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <router-link :to="{ name: 'Home' }" class="mr-3 text-grayish-dark hover:text-orange hover:no-underline">
              回到首頁
            </router-link>
            <a href="#" class="text-grayish-dark hover:text-orange hover:no-underline"><i class="fas fa-lock mr-2"></i>忘記密碼？</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      const vm = this;
      const api = "https://vue-course-api.hexschool.io/admin/signin";
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          const expired = response.data.expired;
          document.cookie = `Token=${token};expires=${new Date(expired)};`;
          vm.$router.push("/admin/products");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 40px;
}
* {
  font-size: 16px;
}
button {
  font-size: 18px;
}
</style>
