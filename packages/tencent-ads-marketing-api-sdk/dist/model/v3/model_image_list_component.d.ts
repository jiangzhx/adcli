import type { ImageListStruct } from "../v3/index";
export interface ImageListComponent {
    component_id?: number | string;
    value?: ImageListStruct;
    is_deleted?: boolean;
}
