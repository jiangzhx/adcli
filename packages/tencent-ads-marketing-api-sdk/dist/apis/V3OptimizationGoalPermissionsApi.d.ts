import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OptimizationGoalPermissionsGetResponseData } from "../models";
export interface V3OptimizationGoalPermissionsApiGetRequest {
    accountId: number | string;
    siteSet: string[];
    marketingGoal: string;
    marketingSubGoal: string;
    marketingCarrierType: string;
    marketingTargetType: string;
    bidMode?: string;
    marketingCarrierDetail?: unknown;
    deliveryScene?: string;
    fields?: unknown;
}
export declare class V3OptimizationGoalPermissionsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3OptimizationGoalPermissionsApiGetRequest): Promise<OptimizationGoalPermissionsGetResponseData>;
    getWithHttpInfo(request: V3OptimizationGoalPermissionsApiGetRequest): Promise<ApiResponse<OptimizationGoalPermissionsGetResponseData>>;
}
