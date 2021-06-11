<template>
  <div>
    <nav class="wrap flex justify-around text-base px-1 mobile:px-3 py-3 tracking-widest bg-grayish-light text-grayish-dark">
      <div>
        <router-link class="logo text-decoration-none hover:text-orange font-extrabold" :to="{ name: 'Home' }">
          UKULELE
        </router-link>
      </div>
      <ul class="flex">
        <li>
          <router-link class="nav-item text-decoration-none hover:text-orange" :to="{ name: 'Home' }">
            Home
          </router-link>
        </li>
        <li class="item px-7">
          <router-link class="nav-item text-decoration-none hover:text-orange" :to="{ name: 'About' }">
            About
          </router-link>
        </li>
        <li>
          <router-link class="nav-item text-decoration-none hover:text-orange" :to="{ name: 'Store' }">
            Shop
          </router-link>
        </li>
      </ul>
      <ul class="flex justify-center items-center">
        <li>
          <router-link to="/login" class="text-decoration-none hover:text-orange">
            <i class="fas fa-user-circle text-xl pr-1"></i>
            <span class="login">登入</span>
          </router-link>
        </li>
        <li class="hidden mobile:block px-2">|</li>
        <li class="icon pl-1.5">
          <router-link :to="{ name: 'CheckOrder' }" class="text-decoration-none hover:text-orange">
            <i class="fas fa-shopping-bag text-xl hover:text-orange"></i>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
a {
  font-size: 20px;
}
* {
  transition: all 0.1s;
}
.logo {
  font-size: 25px;
}
.nav-item {
  position: relative;
}
.nav-item:after {
  content: "";
  position: absolute;
  right: 50%;
  left: 50%;
  bottom: -7px;
  height: 0px;
  border-bottom: 1px solid #bfa760;
  transition: all 0.3s ease-out;
}
.nav-item:hover:after {
  right: 0;
  left: 0;
}
@media (max-width: 640px) {
  .wrap {
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 10px;
  }
  .item {
    padding-right: 15px;
    padding-left: 15px;
  }
  span {
    display: none;
  }
}
@media (max-width: 320px) {
  a {
    font-size: 16px;
  }
  .logo {
    font-size: 20px;
  }
  .item {
    padding-right: 8px;
    padding-left: 8px;
  }
}
</style>
