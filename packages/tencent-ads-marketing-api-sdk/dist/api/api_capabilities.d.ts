import { ApiClient, type ApiResponse } from "./client";
import type { CapabilitiesGetResponseData } from "../model/index";
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
