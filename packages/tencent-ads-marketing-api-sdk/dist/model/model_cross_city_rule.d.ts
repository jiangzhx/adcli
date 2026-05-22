import type { DateRange } from "../model/index";
export interface CrossCityRule {
    route?: string[];
    date_range?: DateRange;
    frequency?: number;
}
