import type { ApiErrorStruct, DynamicAdVideoTemplatesGetResponseData } from "../model/index";
export interface DynamicAdVideoTemplatesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdVideoTemplatesGetResponseData;
}
