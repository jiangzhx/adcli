import { ApiClient, type ApiResponse } from "./client";
import type { UserPropertiesAddRequest } from "../model/index";
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
