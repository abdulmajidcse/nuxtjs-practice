<script setup lang="ts">
const model = defineModel();

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
  <div class="mb-5">
    <Label :for="id" :class="labelClass">
      <slot name="title">
        {{ title }}
      </slot>
    </Label>
    <Input
      v-model="model"
      :type="type"
      :class="inputClass"
      :id="id"
      :required="required ?? false"
    />
  </div>
</template>
