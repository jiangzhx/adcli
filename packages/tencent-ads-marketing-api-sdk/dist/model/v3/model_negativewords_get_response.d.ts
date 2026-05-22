import type { ApiErrorStruct, NegativewordsGetResponseData } from "../v3/index";
export interface NegativewordsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: NegativewordsGetResponseData;
}
