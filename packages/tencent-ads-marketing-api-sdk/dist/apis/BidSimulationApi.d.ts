import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidSimulationGetRequest, BidSimulationGetResponseData } from "../models";
export interface BidSimulationApiGetRequest {
    data: BidSimulationGetRequest;
}
export declare class BidSimulationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BidSimulationApiGetRequest): Promise<BidSimulationGetResponseData>;
    getWithHttpInfo(request: BidSimulationApiGetRequest): Promise<ApiResponse<BidSimulationGetResponseData>>;
}
