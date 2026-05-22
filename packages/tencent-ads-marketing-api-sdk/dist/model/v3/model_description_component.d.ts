import type { DescriptionStruct } from "../v3/index";
export interface DescriptionComponent {
    component_id?: number | string;
    value?: DescriptionStruct;
    is_deleted?: boolean;
}
