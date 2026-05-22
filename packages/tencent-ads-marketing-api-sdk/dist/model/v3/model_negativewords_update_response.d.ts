import type { ApiErrorStruct, NegativewordsUpdateResponseData } from "../v3/index";
export interface NegativewordsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: NegativewordsUpdateResponseData;
}
