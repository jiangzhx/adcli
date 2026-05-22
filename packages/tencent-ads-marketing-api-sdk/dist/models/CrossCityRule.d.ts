import type { DateRange } from "../models";
export interface CrossCityRule {
    route?: string[];
    date_range?: DateRange;
    frequency?: number;
}
