import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtaInfoGetRequest, RtaInfoGetResponseData } from "../models";
export interface V3RtaInfoApiGetRequest {
    data: RtaInfoGetRequest;
}
export declare class V3RtaInfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3RtaInfoApiGetRequest): Promise<RtaInfoGetResponseData>;
    getWithHttpInfo(request: V3RtaInfoApiGetRequest): Promise<ApiResponse<RtaInfoGetResponseData>>;
}
