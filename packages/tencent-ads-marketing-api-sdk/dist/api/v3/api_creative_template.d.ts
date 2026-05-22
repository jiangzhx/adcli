import { ApiClient, type ApiResponse } from "./client";
import type { CreativeTemplateGetResponseData } from "../../model/v3/index";
export interface CreativeTemplateApiGetRequest {
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
    useNewVersion?: boolean;
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
