import type { VideoListStruct } from "../v3/index";
export interface VideoListComponent {
    component_id?: number | string;
    value?: VideoListStruct;
    is_deleted?: boolean;
}
