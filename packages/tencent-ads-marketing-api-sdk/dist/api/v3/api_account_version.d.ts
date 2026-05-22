import { ApiClient, type ApiResponse } from "./client";
import type { AccountVersionGetResponseData } from "../../model/v3/index";
export interface AccountVersionApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class AccountVersionApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AccountVersionApiGetRequest): Promise<AccountVersionGetResponseData>;
    getWithHttpInfo(request: AccountVersionApiGetRequest): Promise<ApiResponse<AccountVersionGetResponseData>>;
}
