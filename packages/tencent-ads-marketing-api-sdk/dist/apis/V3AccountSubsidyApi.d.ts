import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AccountSubsidyGetResponseData } from "../models";
export interface V3AccountSubsidyApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3AccountSubsidyApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AccountSubsidyApiGetRequest): Promise<AccountSubsidyGetResponseData>;
    getWithHttpInfo(request: V3AccountSubsidyApiGetRequest): Promise<ApiResponse<AccountSubsidyGetResponseData>>;
}
