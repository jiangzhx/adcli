import type { ImageShowcaseStruct } from "../models";
export interface ImageShowcaseComponent {
    component_id?: number | string;
    value?: ImageShowcaseStruct;
    is_deleted?: boolean;
}
