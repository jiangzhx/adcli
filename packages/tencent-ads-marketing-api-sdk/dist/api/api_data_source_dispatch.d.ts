import { ApiClient, type ApiResponse } from "./client";
import type { DataSourceDispatchGetResponseData, DataSourceDispatchUpdateRequest, DataSourceDispatchUpdateResponseData } from "../model/index";
export interface DataSourceDispatchApiGetRequest {
    accountId: number | string;
    userActionSetId?: number | string;
    type_?: string;
    name?: string;
    scenes?: unknown;
    switchType?: string;
    accessWay?: string;
    fields?: unknown;
}
export interface DataSourceDispatchApiUpdateRequest {
    data: DataSourceDispatchUpdateRequest;
}
export declare class DataSourceDispatchApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: DataSourceDispatchApiGetRequest): Promise<DataSourceDispatchGetResponseData>;
    getWithHttpInfo(request: DataSourceDispatchApiGetRequest): Promise<ApiResponse<DataSourceDispatchGetResponseData>>;
    update(request: DataSourceDispatchApiUpdateRequest): Promise<DataSourceDispatchUpdateResponseData>;
    updateWithHttpInfo(request: DataSourceDispatchApiUpdateRequest): Promise<ApiResponse<DataSourceDispatchUpdateResponseData>>;
}
