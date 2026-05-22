import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialLabelsAddRequest, MaterialLabelsAddResponseData, MaterialLabelsBindRequest, MaterialLabelsBindResponseData, MaterialLabelsDeleteRequest, MaterialLabelsDeleteResponseData, MaterialLabelsGetResponseData, MaterialLabelsUpdateRequest, MaterialLabelsUpdateResponseData } from "../models";
export interface V3MaterialLabelsApiAddRequest {
    data: MaterialLabelsAddRequest;
}
export interface V3MaterialLabelsApiBindRequest {
    data: MaterialLabelsBindRequest;
}
export interface V3MaterialLabelsApiDeleteRequest {
    data: MaterialLabelsDeleteRequest;
}
export interface V3MaterialLabelsApiGetRequest {
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
export interface V3MaterialLabelsApiUpdateRequest {
    data: MaterialLabelsUpdateRequest;
}
export declare class V3MaterialLabelsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MaterialLabelsApiAddRequest): Promise<MaterialLabelsAddResponseData>;
    addWithHttpInfo(request: V3MaterialLabelsApiAddRequest): Promise<ApiResponse<MaterialLabelsAddResponseData>>;
    bind(request: V3MaterialLabelsApiBindRequest): Promise<MaterialLabelsBindResponseData>;
    bindWithHttpInfo(request: V3MaterialLabelsApiBindRequest): Promise<ApiResponse<MaterialLabelsBindResponseData>>;
    delete(request: V3MaterialLabelsApiDeleteRequest): Promise<MaterialLabelsDeleteResponseData>;
    deleteWithHttpInfo(request: V3MaterialLabelsApiDeleteRequest): Promise<ApiResponse<MaterialLabelsDeleteResponseData>>;
    get(request: V3MaterialLabelsApiGetRequest): Promise<MaterialLabelsGetResponseData>;
    getWithHttpInfo(request: V3MaterialLabelsApiGetRequest): Promise<ApiResponse<MaterialLabelsGetResponseData>>;
    update(request: V3MaterialLabelsApiUpdateRequest): Promise<MaterialLabelsUpdateResponseData>;
    updateWithHttpInfo(request: V3MaterialLabelsApiUpdateRequest): Promise<ApiResponse<MaterialLabelsUpdateResponseData>>;
}
