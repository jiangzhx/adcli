import type { ApiErrorStruct, MuseAiUgcAddResponseData } from "../models";
export interface MuseAiUgcAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAiUgcAddResponseData;
}
