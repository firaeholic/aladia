<template>
    <Login
      v-model:name="name"
      v-model:surname="surname"
      v-model:emailValue="emailValue"
      v-model:recoveryEmail="recoveryEmail"
      v-model:password="password"
      v-model:confirm="confirm"
    :emailValue="emailValue"
    :pinValues="pinValues"
    :currentView="currentView"
    @update:emailValue="updateEmailValue"
    />
</template>

<script>
import Login from "./components/Login.vue"
import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default {
  components: {
    Login,
  },
  mounted() {
    const app = createApp(this);
    app.use(Toast, {
      position: "top-right",
      timeout: 5000,
    });
  },
  data() {
    return {
      name: '',
      surname: '',
      emailValue: '',
      recoveryEmail: '',
      password: '',
      confirm: '',
      pinValues: ['', '', '', '', '', '']
    };
  },
  methods: {
    updateEmailValue(newEmail) {
      this.emailValue = newEmail; // Update local state when child emits event
    },
}
};
</script>
