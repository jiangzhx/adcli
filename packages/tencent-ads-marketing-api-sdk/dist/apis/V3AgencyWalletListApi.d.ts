import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyWalletListGetResponseData } from "../models";
export interface V3AgencyWalletListApiGetRequest {
    accountId: number | string;
    page: number;
    pageSize: number;
    mdmId?: number | string;
    walletId?: number | string;
    fields?: unknown;
}
export declare class V3AgencyWalletListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AgencyWalletListApiGetRequest): Promise<AgencyWalletListGetResponseData>;
    getWithHttpInfo(request: V3AgencyWalletListApiGetRequest): Promise<ApiResponse<AgencyWalletListGetResponseData>>;
}
