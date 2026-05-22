import type { ApiErrorStruct, ChannelsLivenoticeinfoGetResponseData } from "../models";
export interface ChannelsLivenoticeinfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ChannelsLivenoticeinfoGetResponseData;
}
