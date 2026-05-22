import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletGetBindingAdvertiserGetResponseData } from "../models";
export interface V3WalletGetBindingAdvertiserApiGetRequest {
    accountId: number | string;
    walletId: number | string;
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class V3WalletGetBindingAdvertiserApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WalletGetBindingAdvertiserApiGetRequest): Promise<WalletGetBindingAdvertiserGetResponseData>;
    getWithHttpInfo(request: V3WalletGetBindingAdvertiserApiGetRequest): Promise<ApiResponse<WalletGetBindingAdvertiserGetResponseData>>;
}
