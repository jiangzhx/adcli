import { ApiClient, type ApiResponse } from "./client";
import type { WalletBindAdvertiserAddRequest } from "../../model/v3/index";
export interface WalletBindAdvertiserApiAddRequest {
    data: WalletBindAdvertiserAddRequest;
}
export declare class WalletBindAdvertiserApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WalletBindAdvertiserApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: WalletBindAdvertiserApiAddRequest): Promise<ApiResponse<unknown>>;
}
