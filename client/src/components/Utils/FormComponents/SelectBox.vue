<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      @input="$emit('input', $event.target.value)"
      class="browser-default custom-select form-control"
    >
      <option value disabled selected>Choose your option</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    label: String,
    id: String
  }
};
</script>

<style scoped>
.custom-select {
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-radius: 0px;
}
</style>