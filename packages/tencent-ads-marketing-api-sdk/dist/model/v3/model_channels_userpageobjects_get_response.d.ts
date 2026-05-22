import type { ApiErrorStruct, ChannelsUserpageobjectsGetResponseData } from "../v3/index";
export interface ChannelsUserpageobjectsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ChannelsUserpageobjectsGetResponseData;
}
