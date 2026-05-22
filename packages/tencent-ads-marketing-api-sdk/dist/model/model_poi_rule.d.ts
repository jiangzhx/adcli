import type { DateRange } from "../model/index";
export interface PoiRule {
    region_id?: number | string[];
    poi_category_id?: number | string[];
    date_range?: DateRange;
    day_of_week?: string[];
    frequency?: number;
}
