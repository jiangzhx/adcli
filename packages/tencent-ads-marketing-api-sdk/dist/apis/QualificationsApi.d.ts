import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QualificationsAddRequest, QualificationsAddResponseData, QualificationsDeleteRequest, QualificationsDeleteResponseData, QualificationsGetResponseData, QualificationsUpdateRequest, QualificationsUpdateResponseData } from "../models";
export interface QualificationsApiAddRequest {
    data: QualificationsAddRequest;
}
export interface QualificationsApiDeleteRequest {
    data: QualificationsDeleteRequest;
}
export interface QualificationsApiGetRequest {
    accountId: number | string;
    qualificationType: string;
    filtering?: unknown;
    fields?: unknown;
}
export interface QualificationsApiUpdateRequest {
    data: QualificationsUpdateRequest;
}
export declare class QualificationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: QualificationsApiAddRequest): Promise<QualificationsAddResponseData>;
    addWithHttpInfo(request: QualificationsApiAddRequest): Promise<ApiResponse<QualificationsAddResponseData>>;
    delete(request: QualificationsApiDeleteRequest): Promise<QualificationsDeleteResponseData>;
    deleteWithHttpInfo(request: QualificationsApiDeleteRequest): Promise<ApiResponse<QualificationsDeleteResponseData>>;
    get(request: QualificationsApiGetRequest): Promise<QualificationsGetResponseData>;
    getWithHttpInfo(request: QualificationsApiGetRequest): Promise<ApiResponse<QualificationsGetResponseData>>;
    update(request: QualificationsApiUpdateRequest): Promise<QualificationsUpdateResponseData>;
    updateWithHttpInfo(request: QualificationsApiUpdateRequest): Promise<ApiResponse<QualificationsUpdateResponseData>>;
}
