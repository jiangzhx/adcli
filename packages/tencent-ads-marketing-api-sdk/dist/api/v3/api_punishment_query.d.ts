import { ApiClient, type ApiResponse } from "./client";
import type { PunishmentQueryGetRequest, PunishmentQueryGetResponseData } from "../../model/v3/index";
export interface PunishmentQueryApiGetRequest {
    data: PunishmentQueryGetRequest;
}
export declare class PunishmentQueryApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: PunishmentQueryApiGetRequest): Promise<PunishmentQueryGetResponseData>;
    getWithHttpInfo(request: PunishmentQueryApiGetRequest): Promise<ApiResponse<PunishmentQueryGetResponseData>>;
}
