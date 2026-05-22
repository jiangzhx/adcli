import type { BidwordStruct } from "../model/index";
export interface BidwordAddRequest {
    account_id?: number | string;
    list?: BidwordStruct[];
}
