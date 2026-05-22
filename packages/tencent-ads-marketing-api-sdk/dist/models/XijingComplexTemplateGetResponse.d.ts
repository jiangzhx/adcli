import type { ApiErrorStruct, XijingComplexTemplateGetResponseData } from "../models";
export interface XijingComplexTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingComplexTemplateGetResponseData;
}
