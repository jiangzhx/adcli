import { ApiClient, type ApiResponse } from "./client";
import type { RtaInfoGetRequest, RtaInfoGetResponseData } from "../../model/v3/index";
export interface RtaInfoApiGetRequest {
    data: RtaInfoGetRequest;
}
export declare class RtaInfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: RtaInfoApiGetRequest): Promise<RtaInfoGetResponseData>;
    getWithHttpInfo(request: RtaInfoApiGetRequest): Promise<ApiResponse<RtaInfoGetResponseData>>;
}
