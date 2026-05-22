import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseAiTaskAddRequest, MuseAiTaskAddResponseData, MuseAiTaskGetResponseData } from "../models";
export interface V3MuseAiTaskApiAddRequest {
    data: MuseAiTaskAddRequest;
}
export interface V3MuseAiTaskApiGetRequest {
    accountId: number | string;
    taskId: number | string;
    fields?: unknown;
}
export declare class V3MuseAiTaskApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MuseAiTaskApiAddRequest): Promise<MuseAiTaskAddResponseData>;
    addWithHttpInfo(request: V3MuseAiTaskApiAddRequest): Promise<ApiResponse<MuseAiTaskAddResponseData>>;
    get(request: V3MuseAiTaskApiGetRequest): Promise<MuseAiTaskGetResponseData>;
    getWithHttpInfo(request: V3MuseAiTaskApiGetRequest): Promise<ApiResponse<MuseAiTaskGetResponseData>>;
}
