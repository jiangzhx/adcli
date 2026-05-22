import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OfficialLandingPageListGetResponseData } from "../models";
export interface V3OfficialLandingPageListApiGetRequest {
    accountId: number | string;
    page?: number;
    pageSize?: number;
    filtering?: unknown;
    fields?: unknown;
}
export declare class V3OfficialLandingPageListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3OfficialLandingPageListApiGetRequest): Promise<OfficialLandingPageListGetResponseData>;
    getWithHttpInfo(request: V3OfficialLandingPageListApiGetRequest): Promise<ApiResponse<OfficialLandingPageListGetResponseData>>;
}
