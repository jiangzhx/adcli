import type { ApiErrorStruct, VideoChannelDealerDataGetResponseData } from "../v3/index";
export interface VideoChannelDealerDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelDealerDataGetResponseData;
}
