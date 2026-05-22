import { ApiClient, type ApiResponse } from "./client";
import type { BidSimulationGetRequest, BidSimulationGetResponseData } from "../model/index";
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
