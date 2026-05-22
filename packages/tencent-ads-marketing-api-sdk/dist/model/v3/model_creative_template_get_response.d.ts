import type { ApiErrorStruct, CreativeTemplateGetResponseData } from "../v3/index";
export interface CreativeTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeTemplateGetResponseData;
}
