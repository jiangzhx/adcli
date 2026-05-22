import type { ApiErrorStruct, AppAndroidChannelPackagesGetResponseData } from "../models";
export interface AppAndroidChannelPackagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AppAndroidChannelPackagesGetResponseData;
}
