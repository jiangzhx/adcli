import type { ApiErrorStruct, VideoChannelLeadsDataGetResponseData } from "../model/index";
export interface VideoChannelLeadsDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelLeadsDataGetResponseData;
}
