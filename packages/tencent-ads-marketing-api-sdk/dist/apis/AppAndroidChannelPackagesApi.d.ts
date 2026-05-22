import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AppAndroidChannelPackagesGetResponseData } from "../models";
export interface AppAndroidChannelPackagesApiGetRequest {
    accountId: number | string;
    promotedObjectId: string;
    promotedObjectType: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class AppAndroidChannelPackagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AppAndroidChannelPackagesApiGetRequest): Promise<AppAndroidChannelPackagesGetResponseData>;
    getWithHttpInfo(request: AppAndroidChannelPackagesApiGetRequest): Promise<ApiResponse<AppAndroidChannelPackagesGetResponseData>>;
}
