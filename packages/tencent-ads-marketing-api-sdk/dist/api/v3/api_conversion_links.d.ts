import { ApiClient, type ApiResponse } from "./client";
import type { ConversionLinksGetResponseData } from "../../model/v3/index";
export interface ConversionLinksApiGetRequest {
    accountId: number | string;
    secondCategoryType: string;
    optimizationGoalStruct?: unknown;
    fields?: unknown;
}
export declare class ConversionLinksApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ConversionLinksApiGetRequest): Promise<ConversionLinksGetResponseData>;
    getWithHttpInfo(request: ConversionLinksApiGetRequest): Promise<ApiResponse<ConversionLinksGetResponseData>>;
}
