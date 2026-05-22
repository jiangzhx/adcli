import { ApiClient, type ApiResponse } from "./client";
import type { LeadsFormListGetResponseData } from "../model/index";
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
