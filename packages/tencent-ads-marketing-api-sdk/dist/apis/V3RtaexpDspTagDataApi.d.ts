import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtaexpDspTagDataGetRequest, RtaexpDspTagDataGetResponseData } from "../models";
export interface V3RtaexpDspTagDataApiGetRequest {
    data: RtaexpDspTagDataGetRequest;
}
export declare class V3RtaexpDspTagDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3RtaexpDspTagDataApiGetRequest): Promise<RtaexpDspTagDataGetResponseData>;
    getWithHttpInfo(request: V3RtaexpDspTagDataApiGetRequest): Promise<ApiResponse<RtaexpDspTagDataGetResponseData>>;
}
