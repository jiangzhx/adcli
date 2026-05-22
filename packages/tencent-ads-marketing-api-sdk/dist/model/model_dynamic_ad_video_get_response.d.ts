import type { ApiErrorStruct, DynamicAdVideoGetResponseData } from "../model/index";
export interface DynamicAdVideoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdVideoGetResponseData;
}
