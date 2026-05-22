import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DataSourceDispatchGetResponseData } from "../models";
export interface V3DataSourceDispatchApiGetRequest {
    accountId: number | string;
    userActionSetId?: number | string;
    type_?: string;
    name?: string;
    scenes?: unknown;
    switchType?: string;
    accessWay?: string;
    fields?: unknown;
}
export declare class V3DataSourceDispatchApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3DataSourceDispatchApiGetRequest): Promise<DataSourceDispatchGetResponseData>;
    getWithHttpInfo(request: V3DataSourceDispatchApiGetRequest): Promise<ApiResponse<DataSourceDispatchGetResponseData>>;
}
