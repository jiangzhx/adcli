import { ApiClient, type ApiResponse } from "./client";
import type { ComponentDependsGetResponseData } from "../../model/v3/index";
export interface ComponentDependsApiGetRequest {
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
export declare class ComponentDependsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ComponentDependsApiGetRequest): Promise<ComponentDependsGetResponseData>;
    getWithHttpInfo(request: ComponentDependsApiGetRequest): Promise<ApiResponse<ComponentDependsGetResponseData>>;
}
