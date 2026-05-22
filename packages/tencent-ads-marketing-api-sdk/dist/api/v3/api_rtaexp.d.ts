import { ApiClient, type ApiResponse } from "./client";
import type { RtaexpGetRequest, RtaexpGetResponseData } from "../../model/v3/index";
export interface RtaexpApiGetRequest {
    data: RtaexpGetRequest;
}
export declare class RtaexpApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: RtaexpApiGetRequest): Promise<RtaexpGetResponseData>;
    getWithHttpInfo(request: RtaexpApiGetRequest): Promise<ApiResponse<RtaexpGetResponseData>>;
}
