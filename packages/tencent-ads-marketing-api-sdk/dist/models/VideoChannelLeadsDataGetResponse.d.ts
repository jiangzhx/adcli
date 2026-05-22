import type { ApiErrorStruct, VideoChannelLeadsDataGetResponseData } from "../models";
export interface VideoChannelLeadsDataGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideoChannelLeadsDataGetResponseData;
}
