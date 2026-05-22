import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FinderAdObjectListGetResponseData } from "../models";
export interface V3FinderAdObjectListApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3FinderAdObjectListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3FinderAdObjectListApiGetRequest): Promise<FinderAdObjectListGetResponseData>;
    getWithHttpInfo(request: V3FinderAdObjectListApiGetRequest): Promise<ApiResponse<FinderAdObjectListGetResponseData>>;
}
