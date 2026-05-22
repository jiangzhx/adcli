import type { PhoneStruct } from "../v3/index";
export interface PhoneComponent {
    component_id?: number | string;
    value?: PhoneStruct;
    is_deleted?: boolean;
}
