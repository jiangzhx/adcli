import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletBasicInfoGetResponseData } from "../models";
export interface V3WalletBasicInfoApiGetRequest {
    accountId: number | string;
    walletId: number | string;
    fields?: unknown;
}
export declare class V3WalletBasicInfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WalletBasicInfoApiGetRequest): Promise<WalletBasicInfoGetResponseData>;
    getWithHttpInfo(request: V3WalletBasicInfoApiGetRequest): Promise<ApiResponse<WalletBasicInfoGetResponseData>>;
}
