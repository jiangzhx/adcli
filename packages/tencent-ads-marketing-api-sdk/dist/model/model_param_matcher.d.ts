import type { Operator } from "../model/index";
export interface ParamMatcher {
    param_name?: string;
    param_value?: string;
    operator?: Operator;
}
