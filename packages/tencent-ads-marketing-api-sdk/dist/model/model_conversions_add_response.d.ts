import type { ApiErrorStruct, ConversionsAddResponseData } from "../model/index";
export interface ConversionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionsAddResponseData;
}
