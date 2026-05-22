import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativeTemplateListGetResponseData } from "../models";
export interface AdcreativeTemplateListApiGetRequest {
    accountId: number | string;
    siteSet?: string;
    campaignType?: string;
    promotedObjectType?: string;
    dynamicAbilityType?: unknown;
    isDynamicCreative?: boolean;
    wechatSceneSpecPosition?: unknown;
    adcreativeTemplateId?: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class AdcreativeTemplateListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdcreativeTemplateListApiGetRequest): Promise<AdcreativeTemplateListGetResponseData>;
    getWithHttpInfo(request: AdcreativeTemplateListApiGetRequest): Promise<ApiResponse<AdcreativeTemplateListGetResponseData>>;
}
