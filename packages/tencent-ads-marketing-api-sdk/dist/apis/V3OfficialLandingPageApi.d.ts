import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OfficialLandingPageDeleteRequest, OfficialLandingPageDeleteResponseData } from "../models";
export interface V3OfficialLandingPageApiDeleteRequest {
    data: OfficialLandingPageDeleteRequest;
}
export declare class V3OfficialLandingPageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    delete(request: V3OfficialLandingPageApiDeleteRequest): Promise<OfficialLandingPageDeleteResponseData>;
    deleteWithHttpInfo(request: V3OfficialLandingPageApiDeleteRequest): Promise<ApiResponse<OfficialLandingPageDeleteResponseData>>;
}
