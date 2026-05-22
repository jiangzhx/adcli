import type { LableDirection } from "../model/index";
export interface AdcreativeLabel {
    coordinate_x?: number;
    coordinate_y?: number;
    direction?: LableDirection;
    content?: string;
    landing_page_url?: string;
}
