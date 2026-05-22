import type { ApiErrorStruct, VideoChannelLiveDataGetResponseData } from "../v3/index";
export interface VideoChannelLiveDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelLiveDataGetResponseData;
}
