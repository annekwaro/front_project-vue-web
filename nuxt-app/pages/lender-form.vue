<script setup lang="ts">
import { Lender } from "entities";

const { data, error } = await useFetch<Lender[]>(
  "http://localhost:8000/api/lender"
);
const lender = ref(["Mathias", "Rosemary", "Isa", "Michael", "Daniel"]);
const newLender = ref("");
function handleSubmit() {
  lender.value.push(newLender.value);
}
</script>

<template>
  <LenderItem v-for="item of data" :lender="item" />
</template>
