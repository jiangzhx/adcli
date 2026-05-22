import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PunishDetailGetRequest, PunishDetailGetResponseData } from "../models";
export interface V3PunishDetailApiGetRequest {
    data: PunishDetailGetRequest;
}
export declare class V3PunishDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3PunishDetailApiGetRequest): Promise<PunishDetailGetResponseData>;
    getWithHttpInfo(request: V3PunishDetailApiGetRequest): Promise<ApiResponse<PunishDetailGetResponseData>>;
}
