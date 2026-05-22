import type { ConditionInfoStruct } from "../v3/index";
export interface ContactNotifyCondition {
    status_desc?: string;
    status?: number;
    condition_list?: ConditionInfoStruct[];
}
