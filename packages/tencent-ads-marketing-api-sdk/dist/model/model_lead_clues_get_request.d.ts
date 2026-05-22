import type { FilteringStruct, TimeRange } from "../model/index";
export interface LeadCluesGetRequest {
    account_id?: number | string;
    time_range?: TimeRange;
    filtering?: FilteringStruct[];
    page?: number;
    page_size?: number;
    last_search_after_values?: string[];
}
