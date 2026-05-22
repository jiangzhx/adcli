import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtatargetBindAddRequest, RtatargetBindAddResponseData, RtatargetBindDeleteRequest, RtatargetBindDeleteResponseData, RtatargetBindGetRequest, RtatargetBindGetResponseData } from "../models";
export interface V3RtatargetBindApiAddRequest {
    data: RtatargetBindAddRequest;
}
export interface V3RtatargetBindApiDeleteRequest {
    data: RtatargetBindDeleteRequest;
}
export interface V3RtatargetBindApiGetRequest {
    data: RtatargetBindGetRequest;
}
export declare class V3RtatargetBindApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3RtatargetBindApiAddRequest): Promise<RtatargetBindAddResponseData>;
    addWithHttpInfo(request: V3RtatargetBindApiAddRequest): Promise<ApiResponse<RtatargetBindAddResponseData>>;
    delete(request: V3RtatargetBindApiDeleteRequest): Promise<RtatargetBindDeleteResponseData>;
    deleteWithHttpInfo(request: V3RtatargetBindApiDeleteRequest): Promise<ApiResponse<RtatargetBindDeleteResponseData>>;
    get(request: V3RtatargetBindApiGetRequest): Promise<RtatargetBindGetResponseData>;
    getWithHttpInfo(request: V3RtatargetBindApiGetRequest): Promise<ApiResponse<RtatargetBindGetResponseData>>;
}
