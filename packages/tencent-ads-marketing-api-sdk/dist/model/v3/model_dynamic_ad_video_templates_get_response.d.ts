import type { ApiErrorStruct, DynamicAdVideoTemplatesGetResponseData } from "../v3/index";
export interface DynamicAdVideoTemplatesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdVideoTemplatesGetResponseData;
}
