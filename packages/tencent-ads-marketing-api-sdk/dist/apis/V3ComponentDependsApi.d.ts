import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentDependsGetResponseData } from "../models";
export interface V3ComponentDependsApiGetRequest {
    accountId: number | string;
    marketingGoal: string;
    marketingTargetType: string;
    marketingCarrierType: string;
    deliveryMode: string;
    marketingSubGoal?: string;
    automaticSiteEnabled?: boolean;
    siteSet?: unknown;
    dynamicCreativeType?: string;
    creativeTemplateId?: number | string;
    componentType?: string;
    fields?: unknown;
}
export declare class V3ComponentDependsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ComponentDependsApiGetRequest): Promise<ComponentDependsGetResponseData>;
    getWithHttpInfo(request: V3ComponentDependsApiGetRequest): Promise<ApiResponse<ComponentDependsGetResponseData>>;
}
