import type { ApiErrorStruct, VideoChannelFansDataGetResponseData } from "../model/index";
export interface VideoChannelFansDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelFansDataGetResponseData;
}
