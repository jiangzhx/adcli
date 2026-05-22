import type { VideoListStruct } from "../models";
export interface VideoListComponent {
    component_id?: number | string;
    value?: VideoListStruct;
    is_deleted?: boolean;
}
