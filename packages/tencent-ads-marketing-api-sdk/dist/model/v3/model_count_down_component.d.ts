import type { CountDownStruct } from "../v3/index";
export interface CountDownComponent {
    component_id?: number | string;
    value?: CountDownStruct;
    is_deleted?: boolean;
}
