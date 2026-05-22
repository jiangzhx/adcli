import { ApiClient, type ApiResponse } from "./client";
import type { WalletDateRangeTransaction, WalletInvoiceGetResponseData } from "../../model/v3/index";
export interface WalletInvoiceApiGetRequest {
    accountId: number | string;
    walletIdList: string;
    dateRange: WalletDateRangeTransaction;
    fundType?: string;
    page?: number;
    pageSize?: number;
    primaryKey?: string;
    fields?: unknown;
}
export declare class WalletInvoiceApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WalletInvoiceApiGetRequest): Promise<WalletInvoiceGetResponseData>;
    getWithHttpInfo(request: WalletInvoiceApiGetRequest): Promise<ApiResponse<WalletInvoiceGetResponseData>>;
}
