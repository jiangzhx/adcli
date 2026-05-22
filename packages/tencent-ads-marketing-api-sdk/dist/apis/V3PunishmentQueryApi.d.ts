import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PunishmentQueryGetRequest, PunishmentQueryGetResponseData } from "../models";
export interface V3PunishmentQueryApiGetRequest {
    data: PunishmentQueryGetRequest;
}
export declare class V3PunishmentQueryApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3PunishmentQueryApiGetRequest): Promise<PunishmentQueryGetResponseData>;
    getWithHttpInfo(request: V3PunishmentQueryApiGetRequest): Promise<ApiResponse<PunishmentQueryGetResponseData>>;
}
