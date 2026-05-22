import type { ApiErrorStruct, ChannelsUserpageobjectsGetResponseData } from "../models";
export interface ChannelsUserpageobjectsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ChannelsUserpageobjectsGetResponseData;
}
