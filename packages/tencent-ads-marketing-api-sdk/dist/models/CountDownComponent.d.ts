import type { CountDownStruct } from "../models";
export interface CountDownComponent {
    component_id?: number | string;
    value?: CountDownStruct;
    is_deleted?: boolean;
}
