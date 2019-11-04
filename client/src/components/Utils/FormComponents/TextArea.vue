<template>
  <div class="md-form">
    <i :class="`fas fa-${icon} prefix grey-text`"></i>
    <textarea
      type="text"
      :id="labelId"
      :class="`md-textarea ${inputClass}`"
      rows="4"
      @input="$emit('input', $event.target.value)"
    ></textarea>
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