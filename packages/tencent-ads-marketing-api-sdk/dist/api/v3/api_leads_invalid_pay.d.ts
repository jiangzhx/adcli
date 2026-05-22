import { ApiClient, type ApiResponse } from "./client";
import type { LeadsInvalidPayGetResponseData } from "../../model/v3/index";
export interface LeadsInvalidPayApiGetRequest {
    accountId: number | string;
    month: string;
    fields?: unknown;
}
export declare class LeadsInvalidPayApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsInvalidPayApiGetRequest): Promise<LeadsInvalidPayGetResponseData>;
    getWithHttpInfo(request: LeadsInvalidPayApiGetRequest): Promise<ApiResponse<LeadsInvalidPayGetResponseData>>;
}
