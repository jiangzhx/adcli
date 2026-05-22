import type { ApiErrorStruct, ConversionsGetResponseData } from "../model/index";
export interface ConversionsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionsGetResponseData;
}
