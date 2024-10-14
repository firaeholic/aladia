<template>
    <font-awesome-icon
      v-if="showIcon"
      :icon="['fas', 'envelope']"
      class="absolute left-7 top-7"
    />
    <input
        :value="value"
        :placeholder=placeholder
        class="w-full p-2 email-field max-w-96 pl-10 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
    />
    <div :style="{ color: messageColor }" class="text-xs">
      {{ fieldMessage }}
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faEnvelope);

  export default {
    components : {
        FontAwesomeIcon
    },
    name: 'Textfield',
    props: {
      fieldMessage: {
        type: String,
        required: false, 
      },
      placeholder: {
        type: String,
        required: false
      },
      value: {
        type: String,
        required: false
      },
      showIcon: { 
        type: Boolean,
        default: false  
        },
      messageColor: { 
        type: String,
        default: 'red' 
      }
    },
  };
</script>
<style>
  html{
    background-color:black
  }
</style>
