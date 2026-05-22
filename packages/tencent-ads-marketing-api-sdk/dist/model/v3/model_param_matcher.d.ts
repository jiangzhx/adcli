import type { FilterOperator } from "../v3/index";
export interface ParamMatcher {
    param_name?: string;
    param_value?: string;
    operator?: FilterOperator;
}
