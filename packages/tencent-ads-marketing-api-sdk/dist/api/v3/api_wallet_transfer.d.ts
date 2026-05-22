import { ApiClient, type ApiResponse } from "./client";
import type { WalletTransferAddRequest, WalletTransferAddResponseData } from "../../model/v3/index";
export interface WalletTransferApiAddRequest {
    data: WalletTransferAddRequest;
}
export declare class WalletTransferApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WalletTransferApiAddRequest): Promise<WalletTransferAddResponseData>;
    addWithHttpInfo(request: WalletTransferApiAddRequest): Promise<ApiResponse<WalletTransferAddResponseData>>;
}
