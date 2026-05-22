import type { ApiErrorStruct, XijingTemplateGetResponseData } from "../v3/index";
export interface XijingTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingTemplateGetResponseData;
}
