import type { FilterOperator } from "../v3/index";
export interface UrlMatcher {
    param_value?: string;
    operator?: FilterOperator;
}
