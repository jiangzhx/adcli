import type { AudioStruct } from "../models";
export interface AudioComponent {
    component_id?: number | string;
    value?: AudioStruct;
    is_deleted?: boolean;
}
