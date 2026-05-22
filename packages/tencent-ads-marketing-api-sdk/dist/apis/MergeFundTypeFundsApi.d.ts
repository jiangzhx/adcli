import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MergeFundTypeFundsGetResponseData } from "../models";
export interface MergeFundTypeFundsApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class MergeFundTypeFundsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MergeFundTypeFundsApiGetRequest): Promise<MergeFundTypeFundsGetResponseData>;
    getWithHttpInfo(request: MergeFundTypeFundsApiGetRequest): Promise<ApiResponse<MergeFundTypeFundsGetResponseData>>;
}
