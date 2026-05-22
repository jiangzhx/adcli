import type { ApiErrorStruct, VideoChannelLiveDataGetResponseData } from "../models";
export interface VideoChannelLiveDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelLiveDataGetResponseData;
}
