import type { FormStruct } from "../models";
export interface FormComponent {
    component_id?: number | string;
    value?: FormStruct;
    is_deleted?: boolean;
}
