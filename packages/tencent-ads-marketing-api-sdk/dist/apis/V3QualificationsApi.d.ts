import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QualificationsAddRequest, QualificationsAddResponseData, QualificationsDeleteRequest, QualificationsDeleteResponseData, QualificationsGetResponseData, QualificationsUpdateRequest, QualificationsUpdateResponseData } from "../models";
export interface V3QualificationsApiAddRequest {
    data: QualificationsAddRequest;
}
export interface V3QualificationsApiDeleteRequest {
    data: QualificationsDeleteRequest;
}
export interface V3QualificationsApiGetRequest {
    accountId: number | string;
    qualificationType: string;
    filtering?: unknown;
    fields?: unknown;
}
export interface V3QualificationsApiUpdateRequest {
    data: QualificationsUpdateRequest;
}
export declare class V3QualificationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3QualificationsApiAddRequest): Promise<QualificationsAddResponseData>;
    addWithHttpInfo(request: V3QualificationsApiAddRequest): Promise<ApiResponse<QualificationsAddResponseData>>;
    delete(request: V3QualificationsApiDeleteRequest): Promise<QualificationsDeleteResponseData>;
    deleteWithHttpInfo(request: V3QualificationsApiDeleteRequest): Promise<ApiResponse<QualificationsDeleteResponseData>>;
    get(request: V3QualificationsApiGetRequest): Promise<QualificationsGetResponseData>;
    getWithHttpInfo(request: V3QualificationsApiGetRequest): Promise<ApiResponse<QualificationsGetResponseData>>;
    update(request: V3QualificationsApiUpdateRequest): Promise<QualificationsUpdateResponseData>;
    updateWithHttpInfo(request: V3QualificationsApiUpdateRequest): Promise<ApiResponse<QualificationsUpdateResponseData>>;
}
