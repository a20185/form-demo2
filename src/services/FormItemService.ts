import { InjectionKey, inject, ref, toRef } from "vue";
import FormService from "./FormService";

export interface FormItemServiceProps {
  formToken?: InjectionKey<FormService>;
  name: string;
  initialValue?: any;
}

export default class FormItemService {
  form: FormService;
  name: string;
  itemRef = ref<HTMLDivElement>(null);

  // 数据访问劫持
  data = ref<any>(null);
  constructor(props: FormItemServiceProps) {
    this.name = props.name;
    this.form = props.formToken
      ? inject(props.formToken)
      : inject(FormService.token);
    if (!this.form)
      throw new Error(
        "cannot find form, maybe refresh your browser will help at this version"
      );
    // 如果没有 initial 就初始化
    if (!this.data) {
      this.form.model[this.name] = props.initialValue;
    }
    this.data = toRef(this.form.model, this.name);
  }
}
