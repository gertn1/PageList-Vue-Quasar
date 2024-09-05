<template>
  <q-input v-model="value" :type="isPsw ? 'password' : 'text'">
    <template v-slot:append>
      <q-icon
        :name="isPsw ? 'visibility' : 'visibility_off'"
        @click="toggleVisibility"
      ></q-icon>
    </template>
  </q-input>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'PasswordInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue', 'chageIcon'],
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });
    const isPsw = ref<boolean>(true);
    const password = ref('');

    const toggleVisibility = () => {
      isPsw.value = !isPsw.value;
    };
    return {
      isPsw,
      password,
      toggleVisibility,
      value,
    };
  },
});
</script>

<style lang="" scoped></style>
