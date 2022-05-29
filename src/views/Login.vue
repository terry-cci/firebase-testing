<script setup lang="ts">
import { getAuth, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { nextTick } from "vue";

const auth = getAuth();

const ui = new firebaseui.auth.AuthUI(auth);

nextTick(() => {
  ui.start("#firebase-auth-container", {
    signInOptions: [EmailAuthProvider.PROVIDER_ID],
    signInSuccessUrl: "/",
  });
});
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <div
      class="bg-gray-700 rounded-md shadow px-4 py-8 w-1/3"
      id="firebase-auth-container"
    ></div>
  </div>
</template>
