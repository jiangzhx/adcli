import type { ImageListStruct } from "../models";
export interface ImageListComponent {
    component_id?: number | string;
    value?: ImageListStruct;
    is_deleted?: boolean;
}
