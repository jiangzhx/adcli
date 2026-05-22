import type { ApiErrorStruct, DynamicAdImageTemplatesGetResponseData } from "../v3/index";
export interface DynamicAdImageTemplatesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdImageTemplatesGetResponseData;
}
