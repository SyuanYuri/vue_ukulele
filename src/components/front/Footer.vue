<template>
  <div class="footer text-center">
    <div class="py-4 bg-grayish-light text-choco tracking-widest">
      <h2 class="pb-3 inline border-b-2 border-choco text-3xl tracking-widest">
        CONTACT
      </h2>
      <ul class="mt-10 font-medium leading-8">
        <li>台北市中山區松江路188巷1號</li>
        <li>營業時間 10:00AM – 10:00PM</li>
      </ul>
      <ul class="flex justify-center mt-3">
        <li class="icon pl-2">
          <a href="#">
            <i class="fab fa-facebook-f pr-2 pt-0.5 text-lg hover:opacity-60"></i>
          </a>
        </li>
        <li class="icon pl-2 mx-2.5">
          <a href="#">
            <i class="fab fa-instagram pr-2 pt-0.5 text-lg hover:opacity-60"></i>
          </a>
        </li>
        <li class="icon pl-2">
          <a href="https://github.com/SyuanYuri/vue_ukulele" target="_blank">
            <i class="fab fab fa-github pr-2 pt-0.5 text-lg hover:opacity-60"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="py-4 bg-grayish-dark text-grayish-light">
      <h3 class="text-2xl font-thin tracking-widest">訂閱最新消息</h3>
      <form class="flex justify-center items-center mt-3 px-2">
        <div class="mb-2 mr-3">
          <input type="email" id="email" name="email" class="py-1.5 pl-2 pr-4 bg-transparent border border-grayish-light" placeholder="請輸入信箱" />
        </div>
        <button type="submit" class="btn mb-2 border-grayish-light text-grayish-light hover:opacity-60 hover:text-grayish-light">
          確認
        </button>
      </form>
    </div>
    <div class="py-2 flex justify-center items-center flex-col sm:flex-row">
      <h5 class="font-serif tracking-widest text-grayish-dark">© 2021 SyuanYu All rights reserved<span class="hidden sm:inline-block mx-1.5"> | </span></h5>
      <p>個人練習作品，非商業用途</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.icon {
  width: 35px;
  height: 35px;
  border: 1px solid #7d776c;
  border-radius: 100px;
}
.icon:hover,
a:hover {
  text-decoration: none;
  opacity: 0.6;
}
ul li {
  font-family: "Noto Sans TC", sans-serif;
}
.btn {
  background: #32302b;
}
::placeholder {
  letter-spacing: 2px;
  color: #d9d5ca;
}
</style>
