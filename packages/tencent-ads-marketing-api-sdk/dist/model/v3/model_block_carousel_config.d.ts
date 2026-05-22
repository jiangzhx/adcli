import type { CompAreaStruct } from "../v3/index";
export interface BlockCarouselConfig {
    material_id_list?: string[];
    type?: string;
    areas?: CompAreaStruct[];
    margin_top?: number;
    margin_bottom?: number;
}
