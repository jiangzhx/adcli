import { ApiClient, type ApiResponse } from "./client";
import type { FinderAdObjectListGetResponseData } from "../../model/v3/index";
export interface FinderAdObjectListApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class FinderAdObjectListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: FinderAdObjectListApiGetRequest): Promise<FinderAdObjectListGetResponseData>;
    getWithHttpInfo(request: FinderAdObjectListApiGetRequest): Promise<ApiResponse<FinderAdObjectListGetResponseData>>;
}
