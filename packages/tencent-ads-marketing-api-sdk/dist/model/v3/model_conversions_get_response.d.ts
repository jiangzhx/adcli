import type { ApiErrorStruct, ConversionsGetResponseData } from "../v3/index";
export interface ConversionsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionsGetResponseData;
}
