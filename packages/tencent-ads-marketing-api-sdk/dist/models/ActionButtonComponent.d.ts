import type { ActionButtonStruct } from "../models";
export interface ActionButtonComponent {
    component_id?: number | string;
    value?: ActionButtonStruct;
    is_deleted?: boolean;
}
