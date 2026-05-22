import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OfficialLandingPageComponentAddRequest, OfficialLandingPageComponentAddResponseData } from "../models";
export interface V3OfficialLandingPageComponentApiAddRequest {
    data: OfficialLandingPageComponentAddRequest;
}
export declare class V3OfficialLandingPageComponentApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3OfficialLandingPageComponentApiAddRequest): Promise<OfficialLandingPageComponentAddResponseData>;
    addWithHttpInfo(request: V3OfficialLandingPageComponentApiAddRequest): Promise<ApiResponse<OfficialLandingPageComponentAddResponseData>>;
}
