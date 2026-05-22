import type { ApiErrorStruct, XijingTemplateListGetResponseData } from "../models";
export interface XijingTemplateListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingTemplateListGetResponseData;
}
