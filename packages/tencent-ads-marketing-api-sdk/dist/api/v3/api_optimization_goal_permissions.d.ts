import { ApiClient, type ApiResponse } from "./client";
import type { OptimizationGoalPermissionsGetResponseData } from "../../model/v3/index";
export interface OptimizationGoalPermissionsApiGetRequest {
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
export declare class OptimizationGoalPermissionsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: OptimizationGoalPermissionsApiGetRequest): Promise<OptimizationGoalPermissionsGetResponseData>;
    getWithHttpInfo(request: OptimizationGoalPermissionsApiGetRequest): Promise<ApiResponse<OptimizationGoalPermissionsGetResponseData>>;
}
