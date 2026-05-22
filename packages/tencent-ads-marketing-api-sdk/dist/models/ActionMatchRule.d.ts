import type { ActionType, ParamMatcherGroup } from "../models";
export interface ActionMatchRule {
    action_type?: ActionType;
    custom_action?: string;
    param_matcher_group?: ParamMatcherGroup[];
}
