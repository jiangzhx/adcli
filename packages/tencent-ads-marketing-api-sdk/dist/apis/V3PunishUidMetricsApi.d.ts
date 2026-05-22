import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PunishUidMetricsGetRequest, PunishUidMetricsGetResponseData } from "../models";
export interface V3PunishUidMetricsApiGetRequest {
    data: PunishUidMetricsGetRequest;
}
export declare class V3PunishUidMetricsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3PunishUidMetricsApiGetRequest): Promise<PunishUidMetricsGetResponseData>;
    getWithHttpInfo(request: V3PunishUidMetricsApiGetRequest): Promise<ApiResponse<PunishUidMetricsGetResponseData>>;
}
