import { ApiClient, type ApiResponse } from "./client";
import type { MaterialLabelsAddRequest, MaterialLabelsAddResponseData, MaterialLabelsGetRequest, MaterialLabelsGetResponseData } from "../model/index";
export interface MaterialLabelsApiAddRequest {
    data: MaterialLabelsAddRequest;
}
export interface MaterialLabelsApiGetRequest {
    data: MaterialLabelsGetRequest;
}
export declare class MaterialLabelsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MaterialLabelsApiAddRequest): Promise<MaterialLabelsAddResponseData>;
    addWithHttpInfo(request: MaterialLabelsApiAddRequest): Promise<ApiResponse<MaterialLabelsAddResponseData>>;
    get(request: MaterialLabelsApiGetRequest): Promise<MaterialLabelsGetResponseData>;
    getWithHttpInfo(request: MaterialLabelsApiGetRequest): Promise<ApiResponse<MaterialLabelsGetResponseData>>;
}
