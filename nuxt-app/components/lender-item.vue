<script lang="ts" setup>
import { Lender } from "../entities";
defineProps<{
  lender: Lender;
}>();
</script>

<template>
  <div>
    <h2 class="page-title">Lender Information</h2>
    <p class="page-paragraph">Here are the details of the lenders .</p>
    <div class="lender-card-container">
      <div class="lender-card">
        <img
          class="lender-image"
          src="https://via.placeholder.com/150"
          alt="Lender Image"
        />
        <h3 class="lender-name">{{ lender.name }}</h3>
        <p class="lender-info">{{ lender.address }}</p>
        <p class="lender-info">{{ lender.email }}</p>
        <p class="lender-info">{{ lender.telephone }}</p>
        <p class="lender-info">{{ lender.department }}</p>
        <p class="lender-info">{{ lender.date }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.page-paragraph {
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
}

.lender-card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.lender-card {
  padding: 30px;
  background-color: #f4d03f;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
}

.lender-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.lender-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.lender-info {
  font-size: 16px;
  margin-bottom: 5px;
}
</style>
