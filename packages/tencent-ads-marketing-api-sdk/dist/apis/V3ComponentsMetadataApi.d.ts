import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentsMetadataGetResponseData } from "../models";
export interface V3ComponentsMetadataApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    fields?: unknown;
}
export declare class V3ComponentsMetadataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ComponentsMetadataApiGetRequest): Promise<ComponentsMetadataGetResponseData>;
    getWithHttpInfo(request: V3ComponentsMetadataApiGetRequest): Promise<ApiResponse<ComponentsMetadataGetResponseData>>;
}
