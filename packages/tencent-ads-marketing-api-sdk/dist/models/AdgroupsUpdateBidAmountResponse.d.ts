import type { AdgroupsUpdateBidAmountResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsUpdateBidAmountResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateBidAmountResponseData;
}
