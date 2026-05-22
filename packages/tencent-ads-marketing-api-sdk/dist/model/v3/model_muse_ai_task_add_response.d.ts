import type { ApiErrorStruct, MuseAiTaskAddResponseData } from "../v3/index";
export interface MuseAiTaskAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MuseAiTaskAddResponseData;
}
