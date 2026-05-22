import type { BidwordUpdateStruct } from "../v3/index";
export interface BidwordUpdateRequest {
    account_id?: number | string;
    list?: BidwordUpdateStruct[];
}
