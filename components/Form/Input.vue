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
      <slot>
        {{ title }}
      </slot>
    </Label>

    <input
      :type="type"
      :class="inputClass"
      :id="id"
      :required="required ?? false"
      v-model="model"
      class="input-control"
    />
  </div>
</template>
