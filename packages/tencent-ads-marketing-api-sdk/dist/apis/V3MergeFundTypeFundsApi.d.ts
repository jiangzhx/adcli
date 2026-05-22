import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MergeFundTypeFundsGetResponseData } from "../models";
export interface V3MergeFundTypeFundsApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3MergeFundTypeFundsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MergeFundTypeFundsApiGetRequest): Promise<MergeFundTypeFundsGetResponseData>;
    getWithHttpInfo(request: V3MergeFundTypeFundsApiGetRequest): Promise<ApiResponse<MergeFundTypeFundsGetResponseData>>;
}
