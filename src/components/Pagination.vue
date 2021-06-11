<template>
  <div>
    <!-- pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center my-5">
        <li class="page-item" :class="{ disabled: !pages.has_pre }">
          <a class="page-link" href="#" @click.prevent="getPages(pages.current_page - 1)">上頁</a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page" :class="{ active: pages.current_page === page }">
          <a class="page-link" href="#" @click.prevent="getPages(page)">
            {{ page }}
          </a>
        </li>
        <li class="page-item" :class="{ disabled: !pages.has_next }">
          <a class="page-link" href="#" @click.prevent="getPages(pages.current_page + 1)">下頁</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    pages: {
      type: Object,
    },
  },
  methods: {
    getPages(item) {
      this.$emit("event", item);
    },
  },
};
</script>
