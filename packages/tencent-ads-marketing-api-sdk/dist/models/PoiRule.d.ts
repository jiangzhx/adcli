import type { DateRange } from "../models";
export interface PoiRule {
    region_id?: number | string[];
    poi_category_id?: number | string[];
    date_range?: DateRange;
    day_of_week?: string[];
    frequency?: number;
}
