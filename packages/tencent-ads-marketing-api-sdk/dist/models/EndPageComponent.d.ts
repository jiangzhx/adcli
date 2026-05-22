import type { EndPageStruct } from "../models";
export interface EndPageComponent {
    component_id?: number | string;
    value?: EndPageStruct;
    is_deleted?: boolean;
}
