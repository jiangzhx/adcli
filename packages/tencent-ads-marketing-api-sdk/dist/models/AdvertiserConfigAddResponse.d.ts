import type { ApiErrorStruct } from "../models";
export interface AdvertiserConfigAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
