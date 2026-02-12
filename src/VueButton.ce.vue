<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Click me",
  },
  count: {
    type: [Number, String], // Handle attribute string value
    default: 0,
  },
});

const emit = defineEmits(["click"]);

// Local reactive state derived from prop (optional, or just use prop directly if read-only)
const currentCount = ref(Number(props.count));

function handleClick() {
  currentCount.value++;
  emit("click", { count: currentCount.value });
  console.log("Vue Button clicked!", currentCount.value);
}
</script>

<template>
  <button @click="handleClick">{{ text }} ({{ currentCount }})</button>
</template>

<style scoped>
button {
  background-color: #42b883; /* Vue Green */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #3aa876;
}

button:active {
  transform: translateY(1px);
}
</style>
