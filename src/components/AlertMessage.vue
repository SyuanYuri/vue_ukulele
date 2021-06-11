<template>
  <div class="message-alert">
    <div class="alert fade show" role="alert" :class="'alert-' + item.status" v-for="(item, i) in messages" :key="i" data-aos="fade-left" data-aos-duration="1500">
      <span>{{ item.message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    messages() {
      return this.$store.state.messages;
    },
  },
  methods: {
    updateMessage(message, status) {
      this.$store.dispatch("updateMessage", { message, status });
    },
    removeMessage(num) {
      this.$store.dispatch("removeMessage", num);
    },
    removeMessageWithTiming(timestamp) {
      this.$store.dispatch("removeMessageWithTiming", timestamp);
    },
  },
};
</script>

<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 20px;
  right: 20px;
  font-size: 16px;
  padding: 5px;
  z-index: 1100;
}
</style>
