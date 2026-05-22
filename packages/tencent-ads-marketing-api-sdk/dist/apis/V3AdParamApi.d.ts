import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdParamGetResponseData } from "../models";
export interface V3AdParamApiGetRequest {
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
export declare class V3AdParamApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AdParamApiGetRequest): Promise<AdParamGetResponseData>;
    getWithHttpInfo(request: V3AdParamApiGetRequest): Promise<ApiResponse<AdParamGetResponseData>>;
}
