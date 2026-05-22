import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsInvalidPayGetResponseData } from "../models";
export interface V3LeadsInvalidPayApiGetRequest {
    accountId: number | string;
    month: string;
    fields?: unknown;
}
export declare class V3LeadsInvalidPayApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LeadsInvalidPayApiGetRequest): Promise<LeadsInvalidPayGetResponseData>;
    getWithHttpInfo(request: V3LeadsInvalidPayApiGetRequest): Promise<ApiResponse<LeadsInvalidPayGetResponseData>>;
}
