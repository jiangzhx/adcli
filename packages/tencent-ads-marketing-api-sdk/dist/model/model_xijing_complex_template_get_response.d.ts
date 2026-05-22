import type { ApiErrorStruct, XijingComplexTemplateGetResponseData } from "../model/index";
export interface XijingComplexTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingComplexTemplateGetResponseData;
}
