<script lang="ts" setup>
const first = ref("test");
function changeFirst() {
  first.value = "Something else";
}
</script>

<template>
  <div>
    {{ first }}
  </div>
</template>
<button @click="changeFirst"></button>

<style scoped></style>
