<script setup lang="ts">
import { Field } from 'vee-validate';
import { CSSProperties } from 'vue';
import ErrorMessage from './error.message.vue';

interface Props {
  name: string;
  type: string;
  as?: string;
  label?: string;
  labelClass?: CSSProperties;
  inputWrapperClass?: CSSProperties;
  inputClass?: CSSProperties;
  placeholder?: string;
}

defineProps<Props>();
</script>

<template>
  <label v-if="label" :for="name" :class="labelClass">{{ label }}</label>
  <div :class="inputWrapperClass">
    <Field
      :type="type"
      :as="as"
      :class="
        inputClass ||
        'w-full px-5 py-2.5 focus:outline-none placeholder:text-zinc-400 rounded-xl'
      "
      :name="name"
      :placeholder="placeholder"
    />
  </div>
  <ErrorMessage :name="name" />
</template>
