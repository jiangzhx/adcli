import { ApiClient, type ApiResponse } from "./client";
import type { MuseAiTaskAddRequest, MuseAiTaskAddResponseData, MuseAiTaskGetResponseData } from "../../model/v3/index";
export interface MuseAiTaskApiAddRequest {
    data: MuseAiTaskAddRequest;
}
export interface MuseAiTaskApiGetRequest {
    accountId: number | string;
    taskId: number | string;
    fields?: unknown;
}
export declare class MuseAiTaskApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MuseAiTaskApiAddRequest): Promise<MuseAiTaskAddResponseData>;
    addWithHttpInfo(request: MuseAiTaskApiAddRequest): Promise<ApiResponse<MuseAiTaskAddResponseData>>;
    get(request: MuseAiTaskApiGetRequest): Promise<MuseAiTaskGetResponseData>;
    getWithHttpInfo(request: MuseAiTaskApiGetRequest): Promise<ApiResponse<MuseAiTaskGetResponseData>>;
}
