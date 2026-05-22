import { ApiClient, type ApiResponse } from "./client";
import type { UserActionsAddRequest } from "../../model/v3/index";
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
