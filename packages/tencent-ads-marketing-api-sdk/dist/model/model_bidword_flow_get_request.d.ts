import type { OrderByStructInfo } from "../model/index";
export interface BidwordFlowGetRequest {
    account_id?: number | string;
    bidword_list?: string[];
    order_by?: OrderByStructInfo[];
}
