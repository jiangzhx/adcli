import type { LabelStruct } from "../models";
export interface LabelComponent {
    component_id?: number | string;
    value?: LabelStruct;
    is_deleted?: boolean;
}
