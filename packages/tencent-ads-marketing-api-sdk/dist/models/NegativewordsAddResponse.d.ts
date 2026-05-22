import type { ApiErrorStruct, NegativewordsAddResponseData } from "../models";
export interface NegativewordsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: NegativewordsAddResponseData;
}
