import { ApiClient, type ApiResponse } from "./client";
import type { AccountSubsidyGetResponseData } from "../../model/v3/index";
export interface AccountSubsidyApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class AccountSubsidyApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AccountSubsidyApiGetRequest): Promise<AccountSubsidyGetResponseData>;
    getWithHttpInfo(request: AccountSubsidyApiGetRequest): Promise<ApiResponse<AccountSubsidyGetResponseData>>;
}
