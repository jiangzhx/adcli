import type { FilterOperator } from "../models";
export interface UrlMatcher {
    param_value?: string;
    operator?: FilterOperator;
}
