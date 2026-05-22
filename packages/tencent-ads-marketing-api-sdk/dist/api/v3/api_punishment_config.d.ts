import { ApiClient, type ApiResponse } from "./client";
import type { PunishmentConfigGetResponseData } from "../../model/v3/index";
export interface PunishmentConfigApiGetRequest {
    fields?: unknown;
}
export declare class PunishmentConfigApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: PunishmentConfigApiGetRequest): Promise<PunishmentConfigGetResponseData>;
    getWithHttpInfo(request: PunishmentConfigApiGetRequest): Promise<ApiResponse<PunishmentConfigGetResponseData>>;
}
