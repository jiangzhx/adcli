import { ApiClient, type ApiResponse } from "./client";
import type { CreativeTemplateGetResponseData } from "../../model/v3/index";
export interface CreativeTemplateApiGetRequest {
    accountId: number | string;
    deliveryMode: string;
    marketingGoal?: string;
    marketingSubGoal?: string;
    marketingTargetType?: string;
    marketingCarrierType?: string;
    automaticSiteEnabled?: boolean;
    siteSet?: unknown;
    dynamicCreativeType?: string;
    creativeTemplateId?: number | string;
    useNewVersion?: boolean;
    adgroupId?: number | string;
    adgroupType?: string;
    fields?: unknown;
}
export declare class CreativeTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CreativeTemplateApiGetRequest): Promise<CreativeTemplateGetResponseData>;
    getWithHttpInfo(request: CreativeTemplateApiGetRequest): Promise<ApiResponse<CreativeTemplateGetResponseData>>;
}
