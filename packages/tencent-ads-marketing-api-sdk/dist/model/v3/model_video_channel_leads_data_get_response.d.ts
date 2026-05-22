import type { ApiErrorStruct, VideoChannelLeadsDataGetResponseData } from "../v3/index";
export interface VideoChannelLeadsDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelLeadsDataGetResponseData;
}
