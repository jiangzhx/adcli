import { ApiClient, type ApiResponse } from "./client";
import type { TargetcpaTagGetResponseData } from "../model/index";
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
