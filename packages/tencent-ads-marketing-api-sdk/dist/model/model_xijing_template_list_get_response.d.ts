import type { ApiErrorStruct, XijingTemplateListGetResponseData } from "../model/index";
export interface XijingTemplateListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingTemplateListGetResponseData;
}
