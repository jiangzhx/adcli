import type { LabelStruct } from "../v3/index";
export interface LabelComponent {
    component_id?: number | string;
    value?: LabelStruct;
    is_deleted?: boolean;
}
