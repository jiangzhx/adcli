import { ApiClient, type ApiResponse } from "./client";
import type { AgencyWalletListGetResponseData } from "../../model/v3/index";
export interface AgencyWalletListApiGetRequest {
    accountId: number | string;
    page: number;
    pageSize: number;
    mdmId?: number | string;
    walletId?: number | string;
    fields?: unknown;
}
export declare class AgencyWalletListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AgencyWalletListApiGetRequest): Promise<AgencyWalletListGetResponseData>;
    getWithHttpInfo(request: AgencyWalletListApiGetRequest): Promise<ApiResponse<AgencyWalletListGetResponseData>>;
}
