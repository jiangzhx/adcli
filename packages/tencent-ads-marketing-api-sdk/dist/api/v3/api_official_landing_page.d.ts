import { ApiClient, type ApiResponse } from "./client";
import type { OfficialLandingPageDeleteRequest, OfficialLandingPageDeleteResponseData } from "../../model/v3/index";
export interface OfficialLandingPageApiDeleteRequest {
    data: OfficialLandingPageDeleteRequest;
}
export declare class OfficialLandingPageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    delete(request: OfficialLandingPageApiDeleteRequest): Promise<OfficialLandingPageDeleteResponseData>;
    deleteWithHttpInfo(request: OfficialLandingPageApiDeleteRequest): Promise<ApiResponse<OfficialLandingPageDeleteResponseData>>;
}
