import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetingsGetRequest, TargetingsGetResponseData } from "../models";
export interface V3TargetingsApiGetRequest {
    data: TargetingsGetRequest;
}
export declare class V3TargetingsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3TargetingsApiGetRequest): Promise<TargetingsGetResponseData>;
    getWithHttpInfo(request: V3TargetingsApiGetRequest): Promise<ApiResponse<TargetingsGetResponseData>>;
}
