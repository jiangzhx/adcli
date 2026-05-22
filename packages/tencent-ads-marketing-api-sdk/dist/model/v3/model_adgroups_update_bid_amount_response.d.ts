import type { AdgroupsUpdateBidAmountResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupsUpdateBidAmountResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateBidAmountResponseData;
}
