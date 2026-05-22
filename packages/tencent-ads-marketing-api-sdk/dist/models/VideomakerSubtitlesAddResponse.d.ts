import type { ApiErrorStruct, VideomakerSubtitlesAddResponseData } from "../models";
export interface VideomakerSubtitlesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideomakerSubtitlesAddResponseData;
}
