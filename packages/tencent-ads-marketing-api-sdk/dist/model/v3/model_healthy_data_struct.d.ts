import type { HealthyDetailStruct } from "../v3/index";
export interface HealthyDataStruct {
    account_id?: number | string;
    dynamic_creative_id?: number | string;
    adgroup_id?: number | string;
    list?: HealthyDetailStruct[];
}
