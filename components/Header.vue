<template>
    <div class="text-white mt-4"> 
        <h2 class="text-base text-center font-semibold text-lg mb-2 text-white">{{namae + " " + surnamae}}</h2> 
        <p class="text-custom-gray text-sm text-center">{{title}}</p>
        <p class="text-custom-gray text-sm mt-8 text-center">{{ details }}</p>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: false, 
    },
    namae: {
        type: String,
        required: true
    },    
    surnamae: {
        type: String,
        required: true
    }
  },
};
</script>

<style>
.text-custom-gray {
    color: #909090; 
    font-weight: 600;
}
html{
      background-color:black
}
</style>