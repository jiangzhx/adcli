import { ApiClient, type ApiResponse } from "./client";
import type { CustomAudienceInsightsGetResponseData } from "../model/index";
export interface CustomAudienceInsightsApiGetRequest {
    accountId: number | string;
    audienceId: number | string;
    dimensionType: string[];
    fields?: unknown;
}
export declare class CustomAudienceInsightsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CustomAudienceInsightsApiGetRequest): Promise<CustomAudienceInsightsGetResponseData>;
    getWithHttpInfo(request: CustomAudienceInsightsApiGetRequest): Promise<ApiResponse<CustomAudienceInsightsGetResponseData>>;
}
