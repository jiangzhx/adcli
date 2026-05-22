import type { ApiErrorStruct, MuseAiUgcAddResponseData } from "../v3/index";
export interface MuseAiUgcAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAiUgcAddResponseData;
}
