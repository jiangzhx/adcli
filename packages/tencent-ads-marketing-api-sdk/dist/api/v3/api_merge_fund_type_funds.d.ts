import { ApiClient, type ApiResponse } from "./client";
import type { MergeFundTypeFundsGetResponseData } from "../../model/v3/index";
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
