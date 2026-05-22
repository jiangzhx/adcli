import type { ApiErrorStruct, DynamicAdImageTemplatesGetResponseData } from "../model/index";
export interface DynamicAdImageTemplatesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdImageTemplatesGetResponseData;
}
