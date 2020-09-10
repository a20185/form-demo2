<script lang="ts">
import { ref, SetupContext, Ref, onMounted } from "vue";
import FormVue from "./Form.vue";
export default {
  name: "Input",
  props: ["formValue"],
  setup(props: { formValue: Ref<string> }, ctx: SetupContext) {
    return {
      others: ctx.attrs,
      formValue: props.formValue,
    };
  },
};
</script>

<template>
  <div>
    <input v-bind="others" :value="formValue" @input="e=>formValue = e.target.value" />
  </div>
</template>