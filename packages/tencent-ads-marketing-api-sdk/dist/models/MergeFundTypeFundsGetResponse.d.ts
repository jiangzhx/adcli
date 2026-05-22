import type { ApiErrorStruct, MergeFundTypeFundsGetResponseData } from "../models";
export interface MergeFundTypeFundsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeFundsGetResponseData;
}
