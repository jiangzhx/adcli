import type { ApiErrorStruct, VideoChannelFansDataGetResponseData } from "../v3/index";
export interface VideoChannelFansDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelFansDataGetResponseData;
}
