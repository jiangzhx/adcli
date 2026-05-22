import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CapabilitiesGetResponseData } from "../models";
export interface CapabilitiesApiGetRequest {
    accountId: number | string;
    capability: string;
    querySpec?: unknown;
    fields?: unknown;
}
export declare class CapabilitiesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CapabilitiesApiGetRequest): Promise<CapabilitiesGetResponseData>;
    getWithHttpInfo(request: CapabilitiesApiGetRequest): Promise<ApiResponse<CapabilitiesGetResponseData>>;
}
