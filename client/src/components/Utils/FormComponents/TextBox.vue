<template>
  <div class="md-form mb-5">
    <i :class="`fas ${icon} prefix grey-text`"></i>
    <input
      type="text"
      :id="labelId"
      :class="inputClass"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <label :for="labelId">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    placeholder: String,
    inputClass: String,
    label: String,
    icon: String,
    labelId: String
  }
};
</script>


<style scoped>
input {
  border-radius: 0;
}
</style>