import type { CompAreaStruct } from "../models";
export interface BlockCarouselConfig {
    material_id_list?: string[];
    type?: string;
    areas?: CompAreaStruct[];
    margin_top?: number;
    margin_bottom?: number;
}
