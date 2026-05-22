import type { ChosenButtonStruct } from "../models";
export interface ChosenButtonComponent {
    component_id?: number | string;
    value?: ChosenButtonStruct;
    is_deleted?: boolean;
}
