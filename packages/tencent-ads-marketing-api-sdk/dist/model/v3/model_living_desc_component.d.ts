import type { LivingDescStruct } from "../v3/index";
export interface LivingDescComponent {
    component_id?: number | string;
    value?: LivingDescStruct;
    is_deleted?: boolean;
}
