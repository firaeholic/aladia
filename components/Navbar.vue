<template>
    <div class="flex mb-5 p-6 border border-custom-gray mt-10 custom-rounded w-[375px]"
         style="background: linear-gradient(25deg, rgba(255, 255, 255, 0) 9.55%, rgba(255, 255, 255, 0) 30.28%, rgba(246, 246, 246, 0.1) 49.58%, rgba(255, 255, 255, 0) 59.02%, rgba(255, 255, 255, 0) 67.97%, rgba(246, 246, 246, 0.1) 74.56%, rgba(255, 255, 255, 0) 100%);">
      <img src="../assets/header.png" alt="Random Image" class="w-20 h-20 object-cover pl-3" />
      <div class="text-white ml-24"> 
        <h2 class="text-base font-semibold text-sm mb-2">{{ title }}</h2> 
        <p class="text-custom-gray text-sm">{{ details }}</p>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'Navbar',
    props: {
      title: {
        type: String,
        required: true,
      },
      details: {
        type: String,
        required: true, 
      },
    },
  };
  </script>
  
  <style>
    .text-custom-gray {
        color: #909090; 
        font-weight: 600;
    }
    .custom-rounded {
        border-radius: 3px; 
    }
    .border-custom-gray {
        border-color: #2e2e2e; 
    }
    html{
      background-color:black
    }
  </style>
  