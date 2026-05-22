import type { ImageStruct } from "../models";
export interface ImageComponent {
    component_id?: number | string;
    value?: ImageStruct;
    is_deleted?: boolean;
}
