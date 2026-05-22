import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletDateRangeTransaction, WalletInvoiceGetResponseData } from "../models";
export interface V3WalletInvoiceApiGetRequest {
    accountId: number | string;
    walletIdList: string;
    dateRange: WalletDateRangeTransaction;
    fundType?: string;
    page?: number;
    pageSize?: number;
    primaryKey?: string;
    fields?: unknown;
}
export declare class V3WalletInvoiceApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WalletInvoiceApiGetRequest): Promise<WalletInvoiceGetResponseData>;
    getWithHttpInfo(request: V3WalletInvoiceApiGetRequest): Promise<ApiResponse<WalletInvoiceGetResponseData>>;
}
