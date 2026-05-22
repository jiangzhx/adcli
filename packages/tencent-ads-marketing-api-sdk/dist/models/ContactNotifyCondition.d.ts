import type { ConditionInfoStruct } from "../models";
export interface ContactNotifyCondition {
    status_desc?: string;
    status?: number;
    condition_list?: ConditionInfoStruct[];
}
