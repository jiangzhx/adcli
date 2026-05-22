import { ApiClient, type ApiResponse } from "./client";
import type { RtaexpDataRoiGetRequest, RtaexpDataRoiGetResponseData } from "../../model/v3/index";
export interface RtaexpDataRoiApiGetRequest {
    data: RtaexpDataRoiGetRequest;
}
export declare class RtaexpDataRoiApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: RtaexpDataRoiApiGetRequest): Promise<RtaexpDataRoiGetResponseData>;
    getWithHttpInfo(request: RtaexpDataRoiApiGetRequest): Promise<ApiResponse<RtaexpDataRoiGetResponseData>>;
}
