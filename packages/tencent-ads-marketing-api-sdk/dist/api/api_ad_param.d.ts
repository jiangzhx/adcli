import { ApiClient, type ApiResponse } from "./client";
import type { AdParamGetRequest, AdParamGetResponseData } from "../model/index";
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
