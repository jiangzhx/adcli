import type { SearchBidwordStruct } from "../models";
export interface BidwordAddRequest {
    account_id?: number | string;
    list?: SearchBidwordStruct[];
}
