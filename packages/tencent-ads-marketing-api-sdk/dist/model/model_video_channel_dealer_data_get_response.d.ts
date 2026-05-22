import type { ApiErrorStruct, VideoChannelDealerDataGetResponseData } from "../model/index";
export interface VideoChannelDealerDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelDealerDataGetResponseData;
}
