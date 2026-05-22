import type { ApiErrorStruct, NegativewordsGetResponseData } from "../models";
export interface NegativewordsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: NegativewordsGetResponseData;
}
