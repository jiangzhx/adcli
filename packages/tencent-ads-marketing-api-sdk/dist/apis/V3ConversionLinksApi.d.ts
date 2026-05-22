import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ConversionLinksGetResponseData } from "../models";
export interface V3ConversionLinksApiGetRequest {
    accountId: number | string;
    secondCategoryType: string;
    optimizationGoalStruct?: unknown;
    fields?: unknown;
}
export declare class V3ConversionLinksApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ConversionLinksApiGetRequest): Promise<ConversionLinksGetResponseData>;
    getWithHttpInfo(request: V3ConversionLinksApiGetRequest): Promise<ApiResponse<ConversionLinksGetResponseData>>;
}
