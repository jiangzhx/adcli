import { ApiClient, type ApiResponse } from "./client";
import type { OfficialLandingPageComponentAddRequest, OfficialLandingPageComponentAddResponseData } from "../../model/v3/index";
export interface OfficialLandingPageComponentApiAddRequest {
    data: OfficialLandingPageComponentAddRequest;
}
export declare class OfficialLandingPageComponentApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: OfficialLandingPageComponentApiAddRequest): Promise<OfficialLandingPageComponentAddResponseData>;
    addWithHttpInfo(request: OfficialLandingPageComponentApiAddRequest): Promise<ApiResponse<OfficialLandingPageComponentAddResponseData>>;
}
