import { ApiClient, type ApiResponse } from "./client";
import type { PunishMetricsGetRequest, PunishMetricsGetResponseData } from "../../model/v3/index";
export interface PunishMetricsApiGetRequest {
    data: PunishMetricsGetRequest;
}
export declare class PunishMetricsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: PunishMetricsApiGetRequest): Promise<PunishMetricsGetResponseData>;
    getWithHttpInfo(request: PunishMetricsApiGetRequest): Promise<ApiResponse<PunishMetricsGetResponseData>>;
}
