import { ApiClient, type ApiResponse } from "./client";
import type { ComplianceValidationGetRequest, ComplianceValidationGetResponseData } from "../model/index";
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
