import type { ApiErrorStruct, ConversionsGetResponseData } from "../models";
export interface ConversionsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionsGetResponseData;
}
