import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComplianceValidationGetRequest, ComplianceValidationGetResponseData } from "../models";
export interface ComplianceValidationApiGetRequest {
    data: ComplianceValidationGetRequest;
}
export declare class ComplianceValidationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ComplianceValidationApiGetRequest): Promise<ComplianceValidationGetResponseData>;
    getWithHttpInfo(request: ComplianceValidationApiGetRequest): Promise<ApiResponse<ComplianceValidationGetResponseData>>;
}
