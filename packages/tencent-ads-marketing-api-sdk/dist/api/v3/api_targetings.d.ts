import { ApiClient, type ApiResponse } from "./client";
import type { TargetingsGetRequest, TargetingsGetResponseData } from "../../model/v3/index";
export interface TargetingsApiGetRequest {
    data: TargetingsGetRequest;
}
export declare class TargetingsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: TargetingsApiGetRequest): Promise<TargetingsGetResponseData>;
    getWithHttpInfo(request: TargetingsApiGetRequest): Promise<ApiResponse<TargetingsGetResponseData>>;
}
