import type { ApiErrorStruct, ConversionsAddResponseData } from "../models";
export interface ConversionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionsAddResponseData;
}
