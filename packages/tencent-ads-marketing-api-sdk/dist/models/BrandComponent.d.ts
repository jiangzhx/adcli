import type { BrandStruct } from "../models";
export interface BrandComponent {
    component_id?: number | string;
    value?: BrandStruct;
    is_deleted?: boolean;
}
