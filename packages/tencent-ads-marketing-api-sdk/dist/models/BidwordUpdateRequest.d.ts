import type { BidwordUpdateStruct } from "../models";
export interface BidwordUpdateRequest {
    account_id?: number | string;
    list?: BidwordUpdateStruct[];
}
