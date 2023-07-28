<script lang="ts" setup>
import { Lender } from "entities";
const { data, refresh } = useFetch<Lender[]>(
  "http://localhost:8000/api/lender"
);
async function addLender(lender: Lender) {
  await $fetch("http://localhost:8000/api/lender", {
    method: "POST",
    body: lender,
  });
  refresh();
}
</script>

<template>
  <FormDog @submitLender="addLender($event)" />
  <LenderItem v-for="item of data" :lender="item" />
</template>
