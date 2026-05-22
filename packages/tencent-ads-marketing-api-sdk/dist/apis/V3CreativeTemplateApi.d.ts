import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeTemplateGetResponseData } from "../models";
export interface V3CreativeTemplateApiGetRequest {
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
export declare class V3CreativeTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3CreativeTemplateApiGetRequest): Promise<CreativeTemplateGetResponseData>;
    getWithHttpInfo(request: V3CreativeTemplateApiGetRequest): Promise<ApiResponse<CreativeTemplateGetResponseData>>;
}
