import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UserActionsAddRequest } from "../models";
export interface UserActionsApiAddRequest {
    data: UserActionsAddRequest;
}
export declare class UserActionsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: UserActionsApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: UserActionsApiAddRequest): Promise<ApiResponse<unknown>>;
}
