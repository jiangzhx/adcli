import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeTemplateListGetResponseData } from "../models";
export interface V3CreativeTemplateListApiGetRequest {
    accountId: number | string;
    marketingGoal?: string;
    marketingSubGoal?: string;
    marketingTargetType?: string;
    marketingCarrierType?: string;
    siteSet?: string;
    dynamicAbilityType?: string;
    wechatSceneSpecPosition?: unknown;
    creativeTemplateId?: number | string;
    page?: number;
    pageSize?: number;
    dynamicAdType?: string;
    dynamicCreativeType?: string;
    supportSiteSet?: unknown;
    bidMode?: string;
    wechatChannelsScene?: unknown;
    displayScene?: unknown;
    pcScene?: unknown;
    adgroupId?: number | string;
    adgroupType?: string;
    mpaSpec?: unknown;
    fields?: unknown;
}
export declare class V3CreativeTemplateListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3CreativeTemplateListApiGetRequest): Promise<CreativeTemplateListGetResponseData>;
    getWithHttpInfo(request: V3CreativeTemplateListApiGetRequest): Promise<ApiResponse<CreativeTemplateListGetResponseData>>;
}
