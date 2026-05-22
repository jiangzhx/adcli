import { ApiClient, type ApiResponse } from "./client";
import type { LeadsCallVirtualNumberGetResponseData } from "../../model/v3/index";
export interface LeadsCallVirtualNumberApiGetRequest {
    accountId: number | string;
    caller: string;
    callee: string;
    leadsId?: number | string;
    outerLeadsId?: string;
    requestId?: string;
    fields?: unknown;
}
export declare class LeadsCallVirtualNumberApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LeadsCallVirtualNumberApiGetRequest): Promise<LeadsCallVirtualNumberGetResponseData>;
    getWithHttpInfo(request: LeadsCallVirtualNumberApiGetRequest): Promise<ApiResponse<LeadsCallVirtualNumberGetResponseData>>;
}
