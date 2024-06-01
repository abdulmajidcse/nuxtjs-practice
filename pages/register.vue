<script setup lang="ts">
definePageMeta({
  middleware: "guest",
});

const data = reactive({
  email: "",
  password: "",
  repeat_password: "",
  terms: false,
});
</script>

<template>
  <form class="max-w-sm mx-auto">
    <FormInput
      type="email"
      id="email"
      v-model="data.email"
      title="Your Email"
      required
    />
    <FormInput type="password" id="password" title="Your password" required />
    <FormInput
      type="password"
      id="repeat-password"
      title="Repeat password"
      required
    />
    <FormCheckbox id="terms" v-model="data.terms" required>
      I agree with the
      <a href="#" class="text-blue-600 hover:underline dark:text-blue-500"
        >terms and conditions</a
      >
    </FormCheckbox>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Register new account
    </button>
  </form>
</template>
