import { ApiClient, type ApiResponse } from "./client";
import type { WalletGetBindingAdvertiserGetResponseData } from "../../model/v3/index";
export interface WalletGetBindingAdvertiserApiGetRequest {
    accountId: number | string;
    walletId: number | string;
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class WalletGetBindingAdvertiserApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WalletGetBindingAdvertiserApiGetRequest): Promise<WalletGetBindingAdvertiserGetResponseData>;
    getWithHttpInfo(request: WalletGetBindingAdvertiserApiGetRequest): Promise<ApiResponse<WalletGetBindingAdvertiserGetResponseData>>;
}
