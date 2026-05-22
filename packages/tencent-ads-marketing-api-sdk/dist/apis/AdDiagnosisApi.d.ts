import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdDiagnosisGetRequest, AdDiagnosisGetResponseData } from "../models";
export interface AdDiagnosisApiGetRequest {
    data: AdDiagnosisGetRequest;
}
export declare class AdDiagnosisApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdDiagnosisApiGetRequest): Promise<AdDiagnosisGetResponseData>;
    getWithHttpInfo(request: AdDiagnosisApiGetRequest): Promise<ApiResponse<AdDiagnosisGetResponseData>>;
}
