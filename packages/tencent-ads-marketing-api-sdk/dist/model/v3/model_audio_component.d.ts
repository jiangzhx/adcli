import type { AudioStruct } from "../v3/index";
export interface AudioComponent {
    component_id?: number | string;
    value?: AudioStruct;
    is_deleted?: boolean;
}
