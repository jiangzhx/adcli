import type { ApiErrorStruct, DynamicAdImageTemplatesGetResponseData } from "../models";
export interface DynamicAdImageTemplatesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdImageTemplatesGetResponseData;
}
