import type { ApiErrorStruct, DynamicAdVideoAddResponseData } from "../models";
export interface DynamicAdVideoAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicAdVideoAddResponseData;
}
