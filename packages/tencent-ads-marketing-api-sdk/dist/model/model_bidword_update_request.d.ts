import type { BidwordUpdateStruct } from "../model/index";
export interface BidwordUpdateRequest {
    account_id?: number | string;
    list?: BidwordUpdateStruct[];
}
