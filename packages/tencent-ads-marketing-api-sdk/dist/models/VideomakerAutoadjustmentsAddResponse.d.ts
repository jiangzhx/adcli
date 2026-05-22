import type { ApiErrorStruct, VideomakerAutoadjustmentsAddResponseData } from "../models";
export interface VideomakerAutoadjustmentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideomakerAutoadjustmentsAddResponseData;
}
