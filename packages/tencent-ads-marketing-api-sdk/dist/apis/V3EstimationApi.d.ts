import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EstimationGetRequest, EstimationGetResponseData } from "../models";
export interface V3EstimationApiGetRequest {
    data: EstimationGetRequest;
}
export declare class V3EstimationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3EstimationApiGetRequest): Promise<EstimationGetResponseData>;
    getWithHttpInfo(request: V3EstimationApiGetRequest): Promise<ApiResponse<EstimationGetResponseData>>;
}
