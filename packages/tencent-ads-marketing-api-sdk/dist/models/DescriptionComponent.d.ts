import type { DescriptionStruct } from "../models";
export interface DescriptionComponent {
    component_id?: number | string;
    value?: DescriptionStruct;
    is_deleted?: boolean;
}
