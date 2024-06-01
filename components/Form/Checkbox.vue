<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

const checkboxToggle = () => {
  emit("update:modelValue", !props.modelValue);
};

const props = defineProps<{
  modelValue: boolean;
  id: string;
  title?: string;
  required?: boolean;
  labelClass?: string;
  inputClass?: string;
}>();
</script>

<template>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input
        type="checkbox"
        class="input-control !w-4 !h-4 !text-blue-600 !dark:text-blue-900"
        :class="inputClass"
        @change="checkboxToggle"
        :checked="modelValue"
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
