import { ApiClient, type ApiResponse } from "./client";
import type { OfficialLandingPageSubmitUpdateRequest, OfficialLandingPageSubmitUpdateResponseData } from "../../model/v3/index";
export interface OfficialLandingPageSubmitApiUpdateRequest {
    data: OfficialLandingPageSubmitUpdateRequest;
}
export declare class OfficialLandingPageSubmitApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: OfficialLandingPageSubmitApiUpdateRequest): Promise<OfficialLandingPageSubmitUpdateResponseData>;
    updateWithHttpInfo(request: OfficialLandingPageSubmitApiUpdateRequest): Promise<ApiResponse<OfficialLandingPageSubmitUpdateResponseData>>;
}
