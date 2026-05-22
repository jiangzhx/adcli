import { ApiClient, type ApiResponse } from "./client";
import type { OfficialLandingPageListGetResponseData } from "../../model/v3/index";
export interface OfficialLandingPageListApiGetRequest {
    accountId: number | string;
    page?: number;
    pageSize?: number;
    filtering?: unknown;
    fields?: unknown;
}
export declare class OfficialLandingPageListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: OfficialLandingPageListApiGetRequest): Promise<OfficialLandingPageListGetResponseData>;
    getWithHttpInfo(request: OfficialLandingPageListApiGetRequest): Promise<ApiResponse<OfficialLandingPageListGetResponseData>>;
}
