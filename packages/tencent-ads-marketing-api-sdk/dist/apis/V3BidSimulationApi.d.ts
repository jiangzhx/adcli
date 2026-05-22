import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidSimulationGetResponseData } from "../models";
export interface V3BidSimulationApiGetRequest {
    accountId: number | string;
    reqType?: number;
    optimizationGoalLevel?: number;
    adgroupId?: number | string;
    bidList?: unknown;
    fields?: unknown;
}
export declare class V3BidSimulationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3BidSimulationApiGetRequest): Promise<BidSimulationGetResponseData>;
    getWithHttpInfo(request: V3BidSimulationApiGetRequest): Promise<ApiResponse<BidSimulationGetResponseData>>;
}
