import type { Operator } from "../model/index";
export interface UrlMatcher {
    param_value?: string;
    operator?: Operator;
}
