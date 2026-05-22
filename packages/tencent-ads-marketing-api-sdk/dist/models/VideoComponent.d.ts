import type { VideoStruct } from "../models";
export interface VideoComponent {
    component_id?: number | string;
    value?: VideoStruct;
    is_deleted?: boolean;
}
