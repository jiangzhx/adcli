import type { ElementStruct, SupplementStruct } from "../models";
export interface ReviewElementPrereviewResultsGetRequest {
    account_id?: number | string;
    adgroup_id?: number | string;
    elements?: ElementStruct[];
    supplement?: SupplementStruct[];
}
