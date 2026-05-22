import type { FormStruct } from "../v3/index";
export interface FormComponent {
    component_id?: number | string;
    value?: FormStruct;
    is_deleted?: boolean;
}
