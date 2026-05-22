import { ApiClient, type ApiResponse } from "./client";
import type { CustomAudienceEstimationsGetResponseData, EstimationAudienceSpec } from "../../model/v3/index";
export interface CustomAudienceEstimationsApiGetRequest {
    accountId: number | string;
    type_: string;
    audienceSpec: EstimationAudienceSpec;
    fields?: unknown;
}
export declare class CustomAudienceEstimationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CustomAudienceEstimationsApiGetRequest): Promise<CustomAudienceEstimationsGetResponseData>;
    getWithHttpInfo(request: CustomAudienceEstimationsApiGetRequest): Promise<ApiResponse<CustomAudienceEstimationsGetResponseData>>;
}
