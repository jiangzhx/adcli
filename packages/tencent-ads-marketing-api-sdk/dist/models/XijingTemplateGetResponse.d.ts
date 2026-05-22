import type { ApiErrorStruct, XijingTemplateGetResponseData } from "../models";
export interface XijingTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingTemplateGetResponseData;
}
