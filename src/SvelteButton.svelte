<svelte:options customElement="my-svelte-button" />

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let text: string = 'Click me';
  export let count: number = 0;

  const dispatch = createEventDispatcher();

  function handleClick() {
    // Ensure count is treated as a number (attributes are strings)
    if (typeof count === 'string') {
      count = parseInt(count, 10);
    }
    count += 1;
    dispatch('click', { count });
    console.log('Button clicked!', count);
  }
</script>

<button on:click={handleClick}>
  {text} ({count})
</button>

<style>
  button {
    background-color: #ff3e00;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #e63900;
  }

  button:active {
    transform: translateY(1px);
  }
</style>
