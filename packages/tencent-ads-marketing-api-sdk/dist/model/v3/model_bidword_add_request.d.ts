import type { SearchBidwordStruct } from "../v3/index";
export interface BidwordAddRequest {
    account_id?: number | string;
    list?: SearchBidwordStruct[];
}
