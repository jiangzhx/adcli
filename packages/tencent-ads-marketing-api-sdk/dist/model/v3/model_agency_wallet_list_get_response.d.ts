import type { AgencyWalletListGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AgencyWalletListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyWalletListGetResponseData;
}
