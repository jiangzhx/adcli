import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UserPropertiesAddRequest } from "../models";
export interface UserPropertiesApiAddRequest {
    data: UserPropertiesAddRequest;
}
export declare class UserPropertiesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: UserPropertiesApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: UserPropertiesApiAddRequest): Promise<ApiResponse<unknown>>;
}
