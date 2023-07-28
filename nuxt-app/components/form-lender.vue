<script lang="ts" setup>
import { Lender } from "../entities";
const emit = defineEmits<{
  (e: "submitLender", lender: Lender): void;
}>();

const lender = ref<Lender>({
  name: "",
  address: "",
  email: "",
  telephone: "",
  department: "",
  date: new Date(),
});
function handleSubmit() {
  emit("submitLender", lender.value);
}
</script>
<template>
  <form @submit.prevent="handleSubmit()">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="lender.name" />
    <label for="email">Email</label>
    <input type="email" id="email" v-model="lender.email" />
    <label for="address">Address</label>
    <input type="text" id="address" v-model="lender.address" />
    <label for="telephone">Telephone</label>
    <input type="text" id="telephone" v-model="lender.telephone" />
    <label for="department">Department</label>
    <input type="text" id="department" v-model="lender.department" />
    <label for="date">Date</label>
    <input type="date" id="date" v-model="lender.date" />
    <button>Submit</button>
  </form>
</template>

<style scoped></style>
