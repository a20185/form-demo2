<script lang="ts">
import Form from "./components/Form.vue";
import FormItem from "./components/FormItem.vue";
import Input from "./components/Input.vue";
import { ref, watchEffect, watch, reactive, toRef } from "vue";
export default {
  name: "App",
  components: {
    "test-form": Form,
    "test-form-item": FormItem,
    "test-input": Input,
  },
  setup() {
    return {
      handleChange(e) {
        console.log(e);
      },
    };
  },
};
</script>

<template>
  <test-form :initialValue="{name:'test'}" @filedChange="handleChange">
    <test-form-item name="name">
      <test-input placeholder="fuck" />
    </test-form-item>
    <test-form-item name="name2">
      <test-input placeholder="fuck" />
    </test-form-item>
  </test-form>
</template>