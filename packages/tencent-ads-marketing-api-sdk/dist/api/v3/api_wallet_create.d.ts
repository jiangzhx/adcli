import { ApiClient, type ApiResponse } from "./client";
import type { WalletCreateAddRequest, WalletCreateAddResponseData } from "../../model/v3/index";
export interface WalletCreateApiAddRequest {
    data: WalletCreateAddRequest;
}
export declare class WalletCreateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WalletCreateApiAddRequest): Promise<WalletCreateAddResponseData>;
    addWithHttpInfo(request: WalletCreateApiAddRequest): Promise<ApiResponse<WalletCreateAddResponseData>>;
}
