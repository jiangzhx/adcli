import type { ApiErrorStruct, MuseAiTaskGetResponseData } from "../models";
export interface MuseAiTaskGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAiTaskGetResponseData;
}
