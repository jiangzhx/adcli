import { ApiClient, type ApiResponse } from "./client";
import type { ElementAppealQuotaGetResponseData } from "../../model/v3/index";
export interface ElementAppealQuotaApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class ElementAppealQuotaApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ElementAppealQuotaApiGetRequest): Promise<ElementAppealQuotaGetResponseData>;
    getWithHttpInfo(request: ElementAppealQuotaApiGetRequest): Promise<ApiResponse<ElementAppealQuotaGetResponseData>>;
}
