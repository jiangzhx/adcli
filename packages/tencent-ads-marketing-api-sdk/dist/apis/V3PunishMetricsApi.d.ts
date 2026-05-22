import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PunishMetricsGetRequest, PunishMetricsGetResponseData } from "../models";
export interface V3PunishMetricsApiGetRequest {
    data: PunishMetricsGetRequest;
}
export declare class V3PunishMetricsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3PunishMetricsApiGetRequest): Promise<PunishMetricsGetResponseData>;
    getWithHttpInfo(request: V3PunishMetricsApiGetRequest): Promise<ApiResponse<PunishMetricsGetResponseData>>;
}
