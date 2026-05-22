import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomAudienceInsightsGetResponseData } from "../models";
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
