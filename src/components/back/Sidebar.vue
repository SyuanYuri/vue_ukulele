<template>
  <div>
    <div class="mt-16 border-t-8 border-grayish-light text-grayish-dark rounded-md shadow-md bg-white">
      <ul class="py-3 pr-3">
        <li class="pl-3 py-2 cursor-pointer flex items-center hover:opacity-70">
          <i class="fas fa-box"></i>
          <router-link :to="{ name: 'Products' }" class="pl-2 hover:no-underline">
            產品列表
          </router-link>
        </li>
        <li class="pl-3 py-2 cursor-pointer flex items-center hover:opacity-70">
          <i class="fas fa-clipboard-list" style="font-size: 20px"></i>
          <router-link :to="{ name: 'Orders' }" class="pl-2 hover:no-underline">
            訂單列表
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
