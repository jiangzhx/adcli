import type { ApiErrorStruct, VideomakerTasksGetResponseData } from "../model/index";
export interface VideomakerTasksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideomakerTasksGetResponseData;
}
