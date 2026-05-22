import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletBindAdvertiserAddRequest } from "../models";
export interface V3WalletBindAdvertiserApiAddRequest {
    data: WalletBindAdvertiserAddRequest;
}
export declare class V3WalletBindAdvertiserApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WalletBindAdvertiserApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: V3WalletBindAdvertiserApiAddRequest): Promise<ApiResponse<unknown>>;
}
