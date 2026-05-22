import { ApiClient, type ApiResponse } from "./client";
import type { WalletBasicInfoGetResponseData } from "../../model/v3/index";
export interface WalletBasicInfoApiGetRequest {
    accountId: number | string;
    walletId: number | string;
    fields?: unknown;
}
export declare class WalletBasicInfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WalletBasicInfoApiGetRequest): Promise<WalletBasicInfoGetResponseData>;
    getWithHttpInfo(request: WalletBasicInfoApiGetRequest): Promise<ApiResponse<WalletBasicInfoGetResponseData>>;
}
