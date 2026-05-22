import { ApiClient, type ApiResponse } from "./client";
import type { AdParamGetResponseData } from "../../model/v3/index";
export interface AdParamApiGetRequest {
    accountId: number | string;
    marketingGoal: string;
    creativeTemplateId: number | string;
    siteSet: string[];
    marketingSubGoal?: string;
    marketingCarrierType?: string;
    marketingTargetType?: string;
    productCatalogId?: number | string;
    marketingAssetOuterSpec?: unknown;
    mpaSpec?: unknown;
    dynamicAdType?: string;
    adgroupType?: string;
    fields?: unknown;
}
export declare class AdParamApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdParamApiGetRequest): Promise<AdParamGetResponseData>;
    getWithHttpInfo(request: AdParamApiGetRequest): Promise<ApiResponse<AdParamGetResponseData>>;
}
