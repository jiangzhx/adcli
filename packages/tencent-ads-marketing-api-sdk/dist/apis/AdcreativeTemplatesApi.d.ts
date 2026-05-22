import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativeTemplatesGetResponseData } from "../models";
export interface AdcreativeTemplatesApiGetRequest {
    accountId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class AdcreativeTemplatesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdcreativeTemplatesApiGetRequest): Promise<AdcreativeTemplatesGetResponseData>;
    getWithHttpInfo(request: AdcreativeTemplatesApiGetRequest): Promise<ApiResponse<AdcreativeTemplatesGetResponseData>>;
}
