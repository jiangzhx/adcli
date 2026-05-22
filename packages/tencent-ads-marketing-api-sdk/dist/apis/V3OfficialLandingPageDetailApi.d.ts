import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OfficialLandingPageDetailGetResponseData } from "../models";
export interface V3OfficialLandingPageDetailApiGetRequest {
    accountId: number | string;
    pageId: number | string;
    protoVersion?: number;
    fields?: unknown;
}
export declare class V3OfficialLandingPageDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3OfficialLandingPageDetailApiGetRequest): Promise<OfficialLandingPageDetailGetResponseData>;
    getWithHttpInfo(request: V3OfficialLandingPageDetailApiGetRequest): Promise<ApiResponse<OfficialLandingPageDetailGetResponseData>>;
}
