<template>
  <button @click="onClick">{{ title }}</button>
</template>

<script>
export default {
  name: "VueButton",
  props: {
    title: String,
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<!-- <style></style> -->
