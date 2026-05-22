import type { ApiErrorStruct, MergeFundTypeFundsGetResponseData } from "../model/index";
export interface MergeFundTypeFundsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeFundsGetResponseData;
}
