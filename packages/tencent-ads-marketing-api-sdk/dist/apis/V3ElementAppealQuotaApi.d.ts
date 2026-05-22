import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ElementAppealQuotaGetResponseData } from "../models";
export interface V3ElementAppealQuotaApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3ElementAppealQuotaApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ElementAppealQuotaApiGetRequest): Promise<ElementAppealQuotaGetResponseData>;
    getWithHttpInfo(request: V3ElementAppealQuotaApiGetRequest): Promise<ApiResponse<ElementAppealQuotaGetResponseData>>;
}
