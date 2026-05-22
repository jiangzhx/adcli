import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtaexpDataRoiGetRequest, RtaexpDataRoiGetResponseData } from "../models";
export interface V3RtaexpDataRoiApiGetRequest {
    data: RtaexpDataRoiGetRequest;
}
export declare class V3RtaexpDataRoiApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3RtaexpDataRoiApiGetRequest): Promise<RtaexpDataRoiGetResponseData>;
    getWithHttpInfo(request: V3RtaexpDataRoiApiGetRequest): Promise<ApiResponse<RtaexpDataRoiGetResponseData>>;
}
