import type { ApiErrorStruct, MuseAiTaskAddResponseData } from "../models";
export interface MuseAiTaskAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAiTaskAddResponseData;
}
