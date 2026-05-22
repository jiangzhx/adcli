import type { ApiErrorStruct, XijingComplexTemplateGetResponseData } from "../v3/index";
export interface XijingComplexTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingComplexTemplateGetResponseData;
}
