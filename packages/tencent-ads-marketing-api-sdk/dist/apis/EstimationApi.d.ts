import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EstimationGetRequest, EstimationGetResponseData } from "../models";
export interface EstimationApiGetRequest {
    data: EstimationGetRequest;
}
export declare class EstimationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: EstimationApiGetRequest): Promise<EstimationGetResponseData>;
    getWithHttpInfo(request: EstimationApiGetRequest): Promise<ApiResponse<EstimationGetResponseData>>;
}
