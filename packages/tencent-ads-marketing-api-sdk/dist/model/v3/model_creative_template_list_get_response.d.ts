import type { ApiErrorStruct, CreativeTemplateListGetResponseData } from "../v3/index";
export interface CreativeTemplateListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeTemplateListGetResponseData;
}
