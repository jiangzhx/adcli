import type { ApiErrorStruct, VideomakerSubtitlesAddResponseData } from "../model/index";
export interface VideomakerSubtitlesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideomakerSubtitlesAddResponseData;
}
