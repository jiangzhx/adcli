import { ApiClient, type ApiResponse } from "./client";
import type { ComponentDetailGetResponseData } from "../../model/v3/index";
export interface ComponentDetailApiGetRequest {
    accountId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    organizationId?: number | string;
    adContext?: unknown;
    fields?: unknown;
}
export declare class ComponentDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ComponentDetailApiGetRequest): Promise<ComponentDetailGetResponseData>;
    getWithHttpInfo(request: ComponentDetailApiGetRequest): Promise<ApiResponse<ComponentDetailGetResponseData>>;
}
