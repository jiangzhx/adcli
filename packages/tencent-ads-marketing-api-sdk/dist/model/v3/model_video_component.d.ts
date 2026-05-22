import type { VideoStruct } from "../v3/index";
export interface VideoComponent {
    component_id?: number | string;
    value?: VideoStruct;
    is_deleted?: boolean;
}
