import type { ApiErrorStruct, ChannelsFinderobjectGetResponseData } from "../v3/index";
export interface ChannelsFinderobjectGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ChannelsFinderobjectGetResponseData;
}
