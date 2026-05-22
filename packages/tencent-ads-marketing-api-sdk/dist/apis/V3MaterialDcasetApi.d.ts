import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialDcasetAddRequest, MaterialDcasetAddResponseData } from "../models";
export interface V3MaterialDcasetApiAddRequest {
    data: MaterialDcasetAddRequest;
}
export declare class V3MaterialDcasetApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MaterialDcasetApiAddRequest): Promise<MaterialDcasetAddResponseData>;
    addWithHttpInfo(request: V3MaterialDcasetApiAddRequest): Promise<ApiResponse<MaterialDcasetAddResponseData>>;
}
