import type { ApiErrorStruct, VideoChannelLiveDataGetResponseData } from "../model/index";
export interface VideoChannelLiveDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelLiveDataGetResponseData;
}
