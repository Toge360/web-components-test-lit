<svelte:options customElement="my-base-form" />

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let title: string = 'Contact Form';
  
  let name: string = '';
  let email: string = '';

  const dispatch = createEventDispatcher();

  function handleSubmit(event: Event) {
    event.preventDefault();
    
    const formData = {
      name,
      email,
      timestamp: new Date().toISOString()
    };
    
    dispatch('form-submit', formData);
    console.log('Form Submitted:', formData);
    
    // Optional: Reset form
    name = '';
    email = '';
  }
</script>

<form on:submit={handleSubmit}>
  <h3>{title}</h3>
  
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={name} required placeholder="Your Name" />
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} required placeholder="your.email@example.com" />
  </div>

  <button type="submit">Submit</button>
</form>

<style>
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
    box-sizing: border-box; /* Ensure padding doesn't affect width */
  }

  input:focus {
    border-color: #ff3e00;
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
