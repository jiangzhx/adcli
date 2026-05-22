import { ApiClient, type ApiResponse } from "./client";
import type { MaterialAsyncTasksAddRequest, MaterialAsyncTasksAddResponseData, MaterialAsyncTasksGetResponseData } from "../../model/v3/index";
export interface MaterialAsyncTasksApiAddRequest {
    data: MaterialAsyncTasksAddRequest;
}
export interface MaterialAsyncTasksApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    ownershipType?: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class MaterialAsyncTasksApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MaterialAsyncTasksApiAddRequest): Promise<MaterialAsyncTasksAddResponseData>;
    addWithHttpInfo(request: MaterialAsyncTasksApiAddRequest): Promise<ApiResponse<MaterialAsyncTasksAddResponseData>>;
    get(request: MaterialAsyncTasksApiGetRequest): Promise<MaterialAsyncTasksGetResponseData>;
    getWithHttpInfo(request: MaterialAsyncTasksApiGetRequest): Promise<ApiResponse<MaterialAsyncTasksGetResponseData>>;
}
