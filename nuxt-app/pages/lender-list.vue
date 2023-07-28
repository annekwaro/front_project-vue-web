<!-- <script lang="ts" setup>
const names = ref(["Mathias", "Rosemary", "Isa", "Michael", "Daniel"]);
const newName = ref("");
function addName() {
  names.value.push(newName.value);
}
</script>
<template>
  <input type="text" v-model="newName" placeholder="type a name..." />
  <button @click="addName">Add</button>
  <ul>
    <li v-for="item of names">{{ item }}</li>
  </ul>
</template>-->
<template>
  <div class="name-list-container">
    <div class="main-image-container">
      <img
        class="main-image"
        src="https://images.unsplash.com/photo-1584908917822-6799d69a72cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Main Image"
      />
      <h1 class="main-title">Do you want to add an Item</h1>
      <p class="main-paragraph">
        We believe in lending you an item for your specific <br />needs and we
        can help you advance in your personal projects and business, it is easy
        and simple...
      </p>
    </div>
    <div class="name-input-card">
      <input
        class="name-input"
        type="text"
        v-model="newName"
        placeholder="Type a name..."
      />
      <button class="add-button" @click="addName">Add</button>
    </div>
    <div class="cards-container">
      <div class="card" v-for="item of names" :key="item">
        <img
          class="avatar"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
          alt="Avatar"
        />
        <p class="name">{{ item }}</p>
        <p class="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
          gravida justo. Duis quis metus euismod, mollis nunc vitae, fermentum
          mi. Vivamus sed posuere mauris, vitae luctus ligula.
        </p>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-images">
        <img
          src="https://via.placeholder.com/100"
          alt="Footer Image 1"
          class="footer-image"
        />
        <img
          src="https://via.placeholder.com/100"
          alt="Footer Image 2"
          class="footer-image"
        />
        <img
          src="https://via.placeholder.com/100"
          alt="Footer Image 3"
          class="footer-image"
        />
      </div>
      <p class="footer-text">© 2023 Your Company. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const names = ref(["Mathias", "Rosemary", "Isa", "Michael", "Daniel"]);
const newName = ref("");

function addName() {
  if (newName.value) {
    names.value.push(newName.value);
    newName.value = "";
  }
}
</script>

<style>
.name-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.main-image-container {
  text-align: center;
  margin-bottom: 30px;
  position: relative;
}

.main-image {
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-title {
  font-size: 32px;
  font-weight: bold;
  margin: 20px 0;
}

.main-paragraph {
  font-size: 16px;
  color: #444;
  max-width: 800px;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 800px;
}

.card {
  padding: 15px;
  background-color: #e5e7e9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card:hover {
  padding: 15px;
  background-color: #58a5f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item-description {
  font-size: 14px;
  color: #555;
  margin-top: 10px;
}

.name-input-card {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.name-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.name-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.name-list li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.avatar:hover {
  opacity: 0.8;
}
.name {
  font-size: 18px;
  font-weight: bold;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.footer-images {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.footer-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.footer-text {
  font-size: 14px;
  color: #777;
}
</style>
