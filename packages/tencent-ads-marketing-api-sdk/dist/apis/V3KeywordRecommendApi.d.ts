import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordRecommendGetResponseData } from "../models";
export interface V3KeywordRecommendApiGetRequest {
    siteSets: string[];
    recommendCategory: string;
    accountId: number | string;
    systemIndustryId: number | string;
    queryWord?: unknown;
    businessPointId?: string;
    adgroupId?: number | string;
    campaignId?: number | string;
    includeWord?: unknown;
    excludeWord?: unknown;
    filterAdWord?: boolean;
    filterAccountWord?: boolean;
    recommendReasons?: unknown;
    province?: unknown;
    city?: unknown;
    orderBy?: unknown;
    fields?: unknown;
}
export declare class V3KeywordRecommendApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3KeywordRecommendApiGetRequest): Promise<KeywordRecommendGetResponseData>;
    getWithHttpInfo(request: V3KeywordRecommendApiGetRequest): Promise<ApiResponse<KeywordRecommendGetResponseData>>;
}
