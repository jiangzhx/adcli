import type { ApiErrorStruct, ChannelsFinderobjectGetResponseData } from "../models";
export interface ChannelsFinderobjectGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ChannelsFinderobjectGetResponseData;
}
