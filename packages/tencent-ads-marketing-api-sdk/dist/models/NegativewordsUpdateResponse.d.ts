import type { ApiErrorStruct, NegativewordsUpdateResponseData } from "../models";
export interface NegativewordsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: NegativewordsUpdateResponseData;
}
