import type { ElementStruct, SupplementStruct } from "../v3/index";
export interface ReviewElementPrereviewResultsGetRequest {
    account_id?: number | string;
    adgroup_id?: number | string;
    elements?: ElementStruct[];
    supplement?: SupplementStruct[];
}
