import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PunishmentConfigGetResponseData } from "../models";
export interface V3PunishmentConfigApiGetRequest {
    fields?: unknown;
}
export declare class V3PunishmentConfigApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3PunishmentConfigApiGetRequest): Promise<PunishmentConfigGetResponseData>;
    getWithHttpInfo(request: V3PunishmentConfigApiGetRequest): Promise<ApiResponse<PunishmentConfigGetResponseData>>;
}
