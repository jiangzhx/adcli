import { ApiClient, type ApiResponse } from "./client";
import type { AdcreativeTemplatesGetResponseData } from "../model/index";
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
