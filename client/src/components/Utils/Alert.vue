<template>
  <div :class="`alert alert-${status}`" role="alert">{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: String,
    status: String
  }
};
</script>

<style scoped>
.alert {
  border-radius: 0;
  color: #fff;
}
.alert-danger {
  background: #e74c3c;
}
.alert-success {
  background: #2ecc71;
}
</style>