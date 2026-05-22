import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OfficialLandingPageSubmitUpdateRequest, OfficialLandingPageSubmitUpdateResponseData } from "../models";
export interface V3OfficialLandingPageSubmitApiUpdateRequest {
    data: OfficialLandingPageSubmitUpdateRequest;
}
export declare class V3OfficialLandingPageSubmitApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: V3OfficialLandingPageSubmitApiUpdateRequest): Promise<OfficialLandingPageSubmitUpdateResponseData>;
    updateWithHttpInfo(request: V3OfficialLandingPageSubmitApiUpdateRequest): Promise<ApiResponse<OfficialLandingPageSubmitUpdateResponseData>>;
}
