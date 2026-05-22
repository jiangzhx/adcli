import { ApiClient, type ApiResponse } from "./client";
import type { EstimationGetRequest, EstimationGetResponseData } from "../../model/v3/index";
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
