import type { ApiErrorStruct, CreativeTemplateListGetResponseData } from "../models";
export interface CreativeTemplateListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeTemplateListGetResponseData;
}
