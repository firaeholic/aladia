<template>
<div class="flex flex-col justify-center items-center h-screen"> <!-- Full height for centering -->
    <h2 class="m-3 text-white text-xs text-center"> <!-- Centered title -->
        Enter your details
    </h2>
    <div class="flex flex-col mt-4"> <!-- Vertical alignment of inputs -->
        <input
            type="text"
            placeholder="Name"
            class="w-[352px] name-field text-xs h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
        />
        <input
            type="text"
            placeholder="Surname"
            class="w-[352px] surname-field text-xs h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
        />
        <input
            type="email"
            placeholder="Email Address"
            class="w-[352px] email-field text-xs h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-gray-400 text-black focus:outline-none focus:border-blue-500"
        />
        <input
            type="password"
            placeholder="Password"
            class="w-[352px] password-field text-xs h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
        />
        <input
            type="password"
            placeholder="Confirm Password"
            class="w-[352px] confirm-field text-xs h-[40px] p-2 pl-10 mb-4 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"
        />
    </div>

    <div v-if="passwordWeak" :class="{'pass-error text-red-500 text-xs text-left': isWeak, 'pass-error text-orange-500 text-xs text-left': isMedium,'pass-error text-yellow-500 text-xs text-left': isGood,'pass-error text-green-500 text-xs text-left': isStrong, 'pass-error text-red-500 text-xs text-left': initial}">
        {{ passwordWeakError }}
    </div>

    <div v-if="passwordMismatch" class="mismatch-field text-red-500 text-xs text-left">
        Passwords don't match
    </div>
</div>


</template>
  
  <script>
  export default {
    name: 'Form',
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
    html{
      background-color:black
    }
  </style>
  