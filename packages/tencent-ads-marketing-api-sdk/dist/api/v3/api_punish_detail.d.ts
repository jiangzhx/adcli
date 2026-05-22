import { ApiClient, type ApiResponse } from "./client";
import type { PunishDetailGetRequest, PunishDetailGetResponseData } from "../../model/v3/index";
export interface PunishDetailApiGetRequest {
    data: PunishDetailGetRequest;
}
export declare class PunishDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: PunishDetailApiGetRequest): Promise<PunishDetailGetResponseData>;
    getWithHttpInfo(request: PunishDetailApiGetRequest): Promise<ApiResponse<PunishDetailGetResponseData>>;
}
