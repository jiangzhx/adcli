import type { AgencyWalletListGetResponseData, ApiErrorStruct } from "../models";
export interface AgencyWalletListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyWalletListGetResponseData;
}
