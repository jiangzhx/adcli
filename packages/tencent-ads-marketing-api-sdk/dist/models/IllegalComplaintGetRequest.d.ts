import type { IllegalDateRange } from "../models";
export interface IllegalComplaintGetRequest {
    account_id_list?: number[];
    illegal_level_list?: number[];
    action_type_list?: number[];
    illegal_reason?: string;
    illegal_date_range?: IllegalDateRange;
    page?: number;
    page_size?: number;
}
