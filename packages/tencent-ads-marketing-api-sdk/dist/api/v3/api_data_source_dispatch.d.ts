import { ApiClient, type ApiResponse } from "./client";
import type { DataSourceDispatchGetResponseData } from "../../model/v3/index";
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
export declare class DataSourceDispatchApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: DataSourceDispatchApiGetRequest): Promise<DataSourceDispatchGetResponseData>;
    getWithHttpInfo(request: DataSourceDispatchApiGetRequest): Promise<ApiResponse<DataSourceDispatchGetResponseData>>;
}
