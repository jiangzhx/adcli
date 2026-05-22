import { ApiClient, type ApiResponse } from "./client";
import type { MaterialDcasetAddRequest, MaterialDcasetAddResponseData } from "../../model/v3/index";
export interface MaterialDcasetApiAddRequest {
    data: MaterialDcasetAddRequest;
}
export declare class MaterialDcasetApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MaterialDcasetApiAddRequest): Promise<MaterialDcasetAddResponseData>;
    addWithHttpInfo(request: MaterialDcasetApiAddRequest): Promise<ApiResponse<MaterialDcasetAddResponseData>>;
}
