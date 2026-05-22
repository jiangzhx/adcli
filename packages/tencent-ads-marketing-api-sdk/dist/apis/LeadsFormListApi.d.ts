import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsFormListGetResponseData } from "../models";
export interface LeadsFormListApiGetRequest {
    accountId: number | string;
    beginCreatedTime?: string;
    endCreatedTime?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class LeadsFormListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsFormListApiGetRequest): Promise<LeadsFormListGetResponseData>;
    getWithHttpInfo(request: LeadsFormListApiGetRequest): Promise<ApiResponse<LeadsFormListGetResponseData>>;
}
