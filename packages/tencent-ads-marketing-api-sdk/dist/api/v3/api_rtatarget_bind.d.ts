import { ApiClient, type ApiResponse } from "./client";
import type { RtatargetBindAddRequest, RtatargetBindAddResponseData, RtatargetBindDeleteRequest, RtatargetBindDeleteResponseData, RtatargetBindGetRequest, RtatargetBindGetResponseData } from "../../model/v3/index";
export interface RtatargetBindApiAddRequest {
    data: RtatargetBindAddRequest;
}
export interface RtatargetBindApiDeleteRequest {
    data: RtatargetBindDeleteRequest;
}
export interface RtatargetBindApiGetRequest {
    data: RtatargetBindGetRequest;
}
export declare class RtatargetBindApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: RtatargetBindApiAddRequest): Promise<RtatargetBindAddResponseData>;
    addWithHttpInfo(request: RtatargetBindApiAddRequest): Promise<ApiResponse<RtatargetBindAddResponseData>>;
    delete(request: RtatargetBindApiDeleteRequest): Promise<RtatargetBindDeleteResponseData>;
    deleteWithHttpInfo(request: RtatargetBindApiDeleteRequest): Promise<ApiResponse<RtatargetBindDeleteResponseData>>;
    get(request: RtatargetBindApiGetRequest): Promise<RtatargetBindGetResponseData>;
    getWithHttpInfo(request: RtatargetBindApiGetRequest): Promise<ApiResponse<RtatargetBindGetResponseData>>;
}
