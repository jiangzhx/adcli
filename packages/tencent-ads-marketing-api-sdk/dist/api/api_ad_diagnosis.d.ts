import { ApiClient, type ApiResponse } from "./client";
import type { AdDiagnosisGetRequest, AdDiagnosisGetResponseData } from "../model/index";
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
