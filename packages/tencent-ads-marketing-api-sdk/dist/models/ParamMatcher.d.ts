import type { FilterOperator } from "../models";
export interface ParamMatcher {
    param_name?: string;
    param_value?: string;
    operator?: FilterOperator;
}
