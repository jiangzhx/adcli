import { ApiClient, type ApiResponse } from "./client";
import type { PunishUidMetricsGetRequest, PunishUidMetricsGetResponseData } from "../../model/v3/index";
export interface PunishUidMetricsApiGetRequest {
    data: PunishUidMetricsGetRequest;
}
export declare class PunishUidMetricsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: PunishUidMetricsApiGetRequest): Promise<PunishUidMetricsGetResponseData>;
    getWithHttpInfo(request: PunishUidMetricsApiGetRequest): Promise<ApiResponse<PunishUidMetricsGetResponseData>>;
}
