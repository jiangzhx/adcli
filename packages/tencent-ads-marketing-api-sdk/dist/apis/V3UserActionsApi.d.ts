import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UserActionsAddRequest } from "../models";
export interface V3UserActionsApiAddRequest {
    data: UserActionsAddRequest;
}
export declare class V3UserActionsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3UserActionsApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: V3UserActionsApiAddRequest): Promise<ApiResponse<unknown>>;
}
