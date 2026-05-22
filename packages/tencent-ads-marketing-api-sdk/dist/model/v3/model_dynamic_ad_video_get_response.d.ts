import type { ApiErrorStruct, DynamicAdVideoGetResponseData } from "../v3/index";
export interface DynamicAdVideoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdVideoGetResponseData;
}
