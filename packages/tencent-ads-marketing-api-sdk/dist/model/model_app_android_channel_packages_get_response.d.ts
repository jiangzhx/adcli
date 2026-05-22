import type { ApiErrorStruct, AppAndroidChannelPackagesGetResponseData } from "../model/index";
export interface AppAndroidChannelPackagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AppAndroidChannelPackagesGetResponseData;
}
