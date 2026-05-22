import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativeTemplateGetResponseData } from "../models";
export interface AdcreativeTemplateApiGetRequest {
    accountId: number | string;
    promotedObjectType: string;
    siteSet?: unknown;
    automaticSiteEnabled?: boolean;
    isDynamicCreative?: boolean;
    adcreativeTemplateId?: number | string;
    dynamicCreativeType?: string;
    fields?: unknown;
}
export declare class AdcreativeTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdcreativeTemplateApiGetRequest): Promise<AdcreativeTemplateGetResponseData>;
    getWithHttpInfo(request: AdcreativeTemplateApiGetRequest): Promise<ApiResponse<AdcreativeTemplateGetResponseData>>;
}
