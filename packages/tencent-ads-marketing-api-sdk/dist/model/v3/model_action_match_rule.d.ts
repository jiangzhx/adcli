import type { ActionType, ParamMatcherGroup } from "../v3/index";
export interface ActionMatchRule {
    action_type?: ActionType;
    custom_action?: string;
    param_matcher_group?: ParamMatcherGroup[];
}
