import type { ApiErrorStruct, ChannelsLivenoticeinfoGetResponseData } from "../v3/index";
export interface ChannelsLivenoticeinfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ChannelsLivenoticeinfoGetResponseData;
}
