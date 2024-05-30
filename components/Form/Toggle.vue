<script setup lang="ts">
defineProps<{
  id: string;
  title?: string;
  type?: string;
  required?: boolean;
  labelClass?: string;
  inputClass?: string;
}>();
</script>

<template>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <Input
        :type="type"
        :class="`!w-4 !h-4 !text-blue-600 !dark:text-blue-900 ${inputClass}`"
        :id="id"
        :required="required ?? false"
      />
    </div>

    <Label :for="id" :class="`ms-2 ${labelClass}`">
      <slot>
        {{ title }}
      </slot>
    </Label>
  </div>
</template>
