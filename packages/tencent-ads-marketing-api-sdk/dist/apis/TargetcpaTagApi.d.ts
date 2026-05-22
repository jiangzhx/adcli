import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetcpaTagGetResponseData } from "../models";
export interface TargetcpaTagApiGetRequest {
    accountId: number | string;
    tagTypes: string[];
    fields?: unknown;
}
export declare class TargetcpaTagApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: TargetcpaTagApiGetRequest): Promise<TargetcpaTagGetResponseData>;
    getWithHttpInfo(request: TargetcpaTagApiGetRequest): Promise<ApiResponse<TargetcpaTagGetResponseData>>;
}
