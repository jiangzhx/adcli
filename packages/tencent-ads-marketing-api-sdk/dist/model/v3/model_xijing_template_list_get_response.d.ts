import type { ApiErrorStruct, XijingTemplateListGetResponseData } from "../v3/index";
export interface XijingTemplateListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingTemplateListGetResponseData;
}
