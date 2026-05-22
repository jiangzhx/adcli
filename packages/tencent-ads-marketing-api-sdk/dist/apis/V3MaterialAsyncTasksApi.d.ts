import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialAsyncTasksAddRequest, MaterialAsyncTasksAddResponseData, MaterialAsyncTasksGetResponseData } from "../models";
export interface V3MaterialAsyncTasksApiAddRequest {
    data: MaterialAsyncTasksAddRequest;
}
export interface V3MaterialAsyncTasksApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    ownershipType?: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3MaterialAsyncTasksApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MaterialAsyncTasksApiAddRequest): Promise<MaterialAsyncTasksAddResponseData>;
    addWithHttpInfo(request: V3MaterialAsyncTasksApiAddRequest): Promise<ApiResponse<MaterialAsyncTasksAddResponseData>>;
    get(request: V3MaterialAsyncTasksApiGetRequest): Promise<MaterialAsyncTasksGetResponseData>;
    getWithHttpInfo(request: V3MaterialAsyncTasksApiGetRequest): Promise<ApiResponse<MaterialAsyncTasksGetResponseData>>;
}
