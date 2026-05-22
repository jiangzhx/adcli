import type { ImageStruct } from "../v3/index";
export interface ImageComponent {
    component_id?: number | string;
    value?: ImageStruct;
    is_deleted?: boolean;
}
