import type { ApiErrorStruct, MuseAiTaskGetResponseData } from "../v3/index";
export interface MuseAiTaskGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAiTaskGetResponseData;
}
