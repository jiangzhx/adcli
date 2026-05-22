import type { ApiErrorStruct, VideomakerAutoadjustmentsAddResponseData } from "../model/index";
export interface VideomakerAutoadjustmentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideomakerAutoadjustmentsAddResponseData;
}
