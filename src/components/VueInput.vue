<template>
  <input
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "VueInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style>
input {
  border-radius: 20px;
  padding: 10px;
  margin: 20px 5px;
  outline: none;
  border: transparent 1px;
  font-weight: 500;
  font-family: "Lucida Console", "Verdana", monospace;
}
</style>
