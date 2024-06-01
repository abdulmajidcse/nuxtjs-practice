<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

const checkboxToggle = () => {
  emit("update:modelValue", !props.modelValue);
};

const props = defineProps<{
  modelValue: boolean;
}>();
</script>

<template>
  <input
    type="checkbox"
    class="input-control !w-4 !h-4 !text-blue-600 !dark:text-blue-900"
    @change="checkboxToggle"
    :checked="modelValue"
  />
</template>
