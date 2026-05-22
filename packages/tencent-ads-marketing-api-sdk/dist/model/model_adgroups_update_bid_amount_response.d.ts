import type { AdgroupsUpdateBidAmountResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupsUpdateBidAmountResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateBidAmountResponseData;
}
