import { ApiClient, type ApiResponse } from "./client";
import type { BidSimulationGetResponseData } from "../../model/v3/index";
export interface BidSimulationApiGetRequest {
    accountId: number | string;
    reqType?: number;
    optimizationGoalLevel?: number;
    adgroupId?: number | string;
    bidList?: unknown;
    fields?: unknown;
}
export declare class BidSimulationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BidSimulationApiGetRequest): Promise<BidSimulationGetResponseData>;
    getWithHttpInfo(request: BidSimulationApiGetRequest): Promise<ApiResponse<BidSimulationGetResponseData>>;
}
