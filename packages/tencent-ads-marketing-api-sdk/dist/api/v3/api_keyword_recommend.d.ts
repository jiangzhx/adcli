import { ApiClient, type ApiResponse } from "./client";
import type { KeywordRecommendGetResponseData } from "../../model/v3/index";
export interface KeywordRecommendApiGetRequest {
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
export declare class KeywordRecommendApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: KeywordRecommendApiGetRequest): Promise<KeywordRecommendGetResponseData>;
    getWithHttpInfo(request: KeywordRecommendApiGetRequest): Promise<ApiResponse<KeywordRecommendGetResponseData>>;
}
