import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsCallVirtualNumberGetResponseData } from "../models";
export interface V3LeadsCallVirtualNumberApiGetRequest {
    accountId: number | string;
    caller: string;
    callee: string;
    leadsId?: number | string;
    outerLeadsId?: string;
    requestId?: string;
    fields?: unknown;
}
export declare class V3LeadsCallVirtualNumberApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LeadsCallVirtualNumberApiGetRequest): Promise<LeadsCallVirtualNumberGetResponseData>;
    getWithHttpInfo(request: V3LeadsCallVirtualNumberApiGetRequest): Promise<ApiResponse<LeadsCallVirtualNumberGetResponseData>>;
}
