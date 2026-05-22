import type { ApiErrorStruct, NegativewordsAddResponseData } from "../v3/index";
export interface NegativewordsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: NegativewordsAddResponseData;
}
