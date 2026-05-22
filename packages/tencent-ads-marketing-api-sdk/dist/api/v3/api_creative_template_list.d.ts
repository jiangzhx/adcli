import { ApiClient, type ApiResponse } from "./client";
import type { CreativeTemplateListGetResponseData } from "../../model/v3/index";
export interface CreativeTemplateListApiGetRequest {
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
export declare class CreativeTemplateListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CreativeTemplateListApiGetRequest): Promise<CreativeTemplateListGetResponseData>;
    getWithHttpInfo(request: CreativeTemplateListApiGetRequest): Promise<ApiResponse<CreativeTemplateListGetResponseData>>;
}
