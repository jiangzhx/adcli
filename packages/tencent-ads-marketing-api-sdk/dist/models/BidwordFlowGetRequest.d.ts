import type { OrderByStructInfo } from "../models";
export interface BidwordFlowGetRequest {
    account_id?: number | string;
    bidword_list?: string[];
    order_by?: OrderByStructInfo[];
}
