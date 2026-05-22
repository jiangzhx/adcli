import type { ApiErrorStruct, VideomakerTasksGetResponseData } from "../models";
export interface VideomakerTasksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideomakerTasksGetResponseData;
}
