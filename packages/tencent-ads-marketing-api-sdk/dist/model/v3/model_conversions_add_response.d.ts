import type { ApiErrorStruct, ConversionsAddResponseData } from "../v3/index";
export interface ConversionsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ConversionsAddResponseData;
}
