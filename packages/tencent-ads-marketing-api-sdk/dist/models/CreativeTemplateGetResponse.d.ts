import type { ApiErrorStruct, CreativeTemplateGetResponseData } from "../models";
export interface CreativeTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeTemplateGetResponseData;
}
