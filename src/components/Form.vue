<script lang="ts">
import FormService from "../services/FormService";
import { provide, watchEffect, watch, SetupContext } from "vue";
export default {
  name: "Form",
  props: ["form", "initialValue"],
  setup(
    props: { form?: FormService; initialValue?: { [key: string]: any } },
    ctx: SetupContext
  ) {
    const formService = props.form || new FormService(props.initialValue);
    // 注入两种token
    provide(FormService.token, formService);
    provide(formService.uniqueToken, formService);

    watch([formService.model], (val) => {
      ctx.emit("filedChange", val[0]);
    });
    return;
  },
};
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>