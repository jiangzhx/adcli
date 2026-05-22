import type { PhoneStruct } from "../models";
export interface PhoneComponent {
    component_id?: number | string;
    value?: PhoneStruct;
    is_deleted?: boolean;
}
