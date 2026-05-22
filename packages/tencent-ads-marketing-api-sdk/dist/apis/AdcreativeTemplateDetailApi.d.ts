import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativeTemplateDetailGetResponseData } from "../models";
export interface AdcreativeTemplateDetailApiGetRequest {
    adcreativeTemplateId: number | string;
    promotedObjectType: string;
    accountId?: number | string;
    automaticSiteEnabled?: boolean;
    siteSet?: unknown;
    isDynamicCreativeAd?: boolean;
    fields?: unknown;
}
export declare class AdcreativeTemplateDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdcreativeTemplateDetailApiGetRequest): Promise<AdcreativeTemplateDetailGetResponseData>;
    getWithHttpInfo(request: AdcreativeTemplateDetailApiGetRequest): Promise<ApiResponse<AdcreativeTemplateDetailGetResponseData>>;
}
