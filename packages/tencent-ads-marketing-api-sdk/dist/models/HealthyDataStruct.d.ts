import type { HealthyDetailStruct } from "../models";
export interface HealthyDataStruct {
    account_id?: number | string;
    dynamic_creative_id?: number | string;
    adgroup_id?: number | string;
    list?: HealthyDetailStruct[];
}
