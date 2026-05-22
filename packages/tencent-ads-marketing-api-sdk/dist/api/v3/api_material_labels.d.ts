import { ApiClient, type ApiResponse } from "./client";
import type { MaterialLabelsAddRequest, MaterialLabelsAddResponseData, MaterialLabelsBindRequest, MaterialLabelsBindResponseData, MaterialLabelsDeleteRequest, MaterialLabelsDeleteResponseData, MaterialLabelsGetResponseData, MaterialLabelsUpdateRequest, MaterialLabelsUpdateResponseData } from "../../model/v3/index";
export interface MaterialLabelsApiAddRequest {
    data: MaterialLabelsAddRequest;
}
export interface MaterialLabelsApiBindRequest {
    data: MaterialLabelsBindRequest;
}
export interface MaterialLabelsApiDeleteRequest {
    data: MaterialLabelsDeleteRequest;
}
export interface MaterialLabelsApiGetRequest {
    accountId?: number | string;
    organizationId?: number | string;
    labelId?: number | string;
    labelName?: string;
    firstLabelLevelIdList?: unknown;
    secondLabelLevelIdList?: unknown;
    needCount?: boolean;
    businessScenario?: string;
    ownershipType?: string;
    orderBy?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface MaterialLabelsApiUpdateRequest {
    data: MaterialLabelsUpdateRequest;
}
export declare class MaterialLabelsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MaterialLabelsApiAddRequest): Promise<MaterialLabelsAddResponseData>;
    addWithHttpInfo(request: MaterialLabelsApiAddRequest): Promise<ApiResponse<MaterialLabelsAddResponseData>>;
    bind(request: MaterialLabelsApiBindRequest): Promise<MaterialLabelsBindResponseData>;
    bindWithHttpInfo(request: MaterialLabelsApiBindRequest): Promise<ApiResponse<MaterialLabelsBindResponseData>>;
    delete(request: MaterialLabelsApiDeleteRequest): Promise<MaterialLabelsDeleteResponseData>;
    deleteWithHttpInfo(request: MaterialLabelsApiDeleteRequest): Promise<ApiResponse<MaterialLabelsDeleteResponseData>>;
    get(request: MaterialLabelsApiGetRequest): Promise<MaterialLabelsGetResponseData>;
    getWithHttpInfo(request: MaterialLabelsApiGetRequest): Promise<ApiResponse<MaterialLabelsGetResponseData>>;
    update(request: MaterialLabelsApiUpdateRequest): Promise<MaterialLabelsUpdateResponseData>;
    updateWithHttpInfo(request: MaterialLabelsApiUpdateRequest): Promise<ApiResponse<MaterialLabelsUpdateResponseData>>;
}
