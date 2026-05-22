import type { ApiErrorStruct, DynamicAdVideoGetResponseData } from "../models";
export interface DynamicAdVideoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdVideoGetResponseData;
}
