import type { ImageShowcaseStruct } from "../v3/index";
export interface ImageShowcaseComponent {
    component_id?: number | string;
    value?: ImageShowcaseStruct;
    is_deleted?: boolean;
}
