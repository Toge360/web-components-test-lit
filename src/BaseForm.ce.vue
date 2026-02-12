<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Contact Form",
  },
});

const emit = defineEmits(["form-submit"]);

const name = ref("");
const email = ref("");

function handleSubmit(event: Event) {
  // Prevent default form submission
  // event.preventDefault() is handled by @submit.prevent modifier

  const formData = {
    name: name.value,
    email: email.value,
    timestamp: new Date().toISOString(),
  };

  emit("form-submit", formData);
  console.log("Form Submitted:", formData);

  // Reset form
  name.value = "";
  email.value = "";
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h3>{{ title }}</h3>

    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        required
        placeholder="Your Name"
      />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        required
        placeholder="your.email@example.com"
      />
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
:host {
  display: block;
  font-family: sans-serif;
  max-width: 400px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
}

h3 {
  margin-top: 0;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

input:focus {
  border-color: #42b883;
  outline: none;
}

button {
  background-color: #333;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #555;
}
</style>
