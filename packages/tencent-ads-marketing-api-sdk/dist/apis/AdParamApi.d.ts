import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdParamGetRequest, AdParamGetResponseData } from "../models";
export interface AdParamApiGetRequest {
    data: AdParamGetRequest;
}
export declare class AdParamApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdParamApiGetRequest): Promise<AdParamGetResponseData>;
    getWithHttpInfo(request: AdParamApiGetRequest): Promise<ApiResponse<AdParamGetResponseData>>;
}
