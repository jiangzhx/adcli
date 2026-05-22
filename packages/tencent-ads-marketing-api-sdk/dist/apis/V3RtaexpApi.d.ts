import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtaexpGetRequest, RtaexpGetResponseData } from "../models";
export interface V3RtaexpApiGetRequest {
    data: RtaexpGetRequest;
}
export declare class V3RtaexpApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3RtaexpApiGetRequest): Promise<RtaexpGetResponseData>;
    getWithHttpInfo(request: V3RtaexpApiGetRequest): Promise<ApiResponse<RtaexpGetResponseData>>;
}
