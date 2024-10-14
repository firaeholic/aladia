<template>
    <div>
      <!-- The BackText component -->
      <div class="text-white text-center cursor-pointer">
        {{ title }}
      </div>
      
      <!-- The NewText component -->
      <div class="text-red-500 text-xs">
        {{ errTitle }}
      </div>
    </div>
  </template>
  
  <script>
  const BackText = {
    name: 'BackText',
    props: {
      title: {
        type: String,
        required: false, 
      },
    },
  };
  
  const ErrText = {
    name: 'ErrText',
    props: {
      newTitle: {
        type: String,
        required: false,
      },
    },
  };
  
  export default {
    name: 'CombinedComponent',
    components: {
      BackText,
      ErrText,
    },
    props: {
      title: {
        type: String,
        required: false,
      },
      errTitle: {
        type: String,
        required: false,
      },
    },
  };
  </script>
  
  <style>
     html{
      background-color:black
    }
  </style>
  