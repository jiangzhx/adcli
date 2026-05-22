import { ApiClient, type ApiResponse } from "./client";
import type { OfficialLandingPageDetailGetResponseData } from "../../model/v3/index";
export interface OfficialLandingPageDetailApiGetRequest {
    accountId: number | string;
    pageId: number | string;
    protoVersion?: number;
    fields?: unknown;
}
export declare class OfficialLandingPageDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: OfficialLandingPageDetailApiGetRequest): Promise<OfficialLandingPageDetailGetResponseData>;
    getWithHttpInfo(request: OfficialLandingPageDetailApiGetRequest): Promise<ApiResponse<OfficialLandingPageDetailGetResponseData>>;
}
