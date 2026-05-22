import { ApiClient, type ApiResponse } from "./client";
import type { ComponentsMetadataGetResponseData } from "../../model/v3/index";
export interface ComponentsMetadataApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    fields?: unknown;
}
export declare class ComponentsMetadataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ComponentsMetadataApiGetRequest): Promise<ComponentsMetadataGetResponseData>;
    getWithHttpInfo(request: ComponentsMetadataApiGetRequest): Promise<ApiResponse<ComponentsMetadataGetResponseData>>;
}
