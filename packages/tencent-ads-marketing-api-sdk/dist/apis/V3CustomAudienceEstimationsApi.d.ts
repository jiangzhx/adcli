import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomAudienceEstimationsGetResponseData, EstimationAudienceSpec } from "../models";
export interface V3CustomAudienceEstimationsApiGetRequest {
    accountId: number | string;
    type_: string;
    audienceSpec: EstimationAudienceSpec;
    fields?: unknown;
}
export declare class V3CustomAudienceEstimationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3CustomAudienceEstimationsApiGetRequest): Promise<CustomAudienceEstimationsGetResponseData>;
    getWithHttpInfo(request: V3CustomAudienceEstimationsApiGetRequest): Promise<ApiResponse<CustomAudienceEstimationsGetResponseData>>;
}
