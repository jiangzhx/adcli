import { ApiClient, type ApiResponse } from "./client";
import type { AppAndroidChannelPackagesGetResponseData } from "../model/index";
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
