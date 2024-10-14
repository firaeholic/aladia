<template>
  <button class="w-full button mt-5 text-white py-2 rounded hover:bg-blue-500 mb-3 max-w-96"
      style="background: linear-gradient(25deg, rgba(255, 255, 255, 0) 9.55%, rgba(255, 255, 255, 0) 30.28%, rgba(255, 246, 246, 0.1) 41.58%, rgba(255, 255, 255, 0) 59.02%, rgba(255, 255, 255, 0) 67.97%, rgba(255, 255, 255, 0.4) 74.56%, rgba(255, 255, 255, 0) 100%);"
      >
      {{ title }}
  </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      title: {
        type: String,
        required: true, 
      }
    },
  };
  </script>
  
  <style>
    html{
      background-color:black
    }
  </style>
  