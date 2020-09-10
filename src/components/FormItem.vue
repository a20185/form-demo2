<script lang="ts">
import FormItemService, {
  FormItemServiceProps,
} from "../services/FormItemService";
import { SetupContext, h } from "vue";
export default {
  name: "FormItem",
  props: ["name", "initialValue", "formToken"],
  setup(props: FormItemServiceProps, ctx: SetupContext) {
    const formItemService = new FormItemService(props);
    return { child: null, formItemService };
  },
  render() {
    const children = this.$slots.default();
    console.log(children);
    if (children.length > 1)
      throw new Error("form item can only has single child");
    const child = children[0];
    child.props = {
      ...child.props,
      formValue: this.formItemService.data,
    };
    return child;
  },
};
</script>