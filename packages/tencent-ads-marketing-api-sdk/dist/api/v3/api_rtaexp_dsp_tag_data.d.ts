import { ApiClient, type ApiResponse } from "./client";
import type { RtaexpDspTagDataGetRequest, RtaexpDspTagDataGetResponseData } from "../../model/v3/index";
export interface RtaexpDspTagDataApiGetRequest {
    data: RtaexpDspTagDataGetRequest;
}
export declare class RtaexpDspTagDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: RtaexpDspTagDataApiGetRequest): Promise<RtaexpDspTagDataGetResponseData>;
    getWithHttpInfo(request: RtaexpDspTagDataApiGetRequest): Promise<ApiResponse<RtaexpDspTagDataGetResponseData>>;
}
