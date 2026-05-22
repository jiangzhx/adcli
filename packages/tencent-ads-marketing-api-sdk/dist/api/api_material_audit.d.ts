import { ApiClient, type ApiResponse } from "./client";
import type { MaterialAuditListRequest, MaterialAuditListResponseData, MaterialAuditSubmitRequest, MaterialAuditSubmitResponseData } from "../model/index";
export interface MaterialAuditApiListRequest {
    data: MaterialAuditListRequest;
}
export interface MaterialAuditApiSubmitRequest {
    data: MaterialAuditSubmitRequest;
}
export declare class MaterialAuditApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    list(request: MaterialAuditApiListRequest): Promise<MaterialAuditListResponseData>;
    listWithHttpInfo(request: MaterialAuditApiListRequest): Promise<ApiResponse<MaterialAuditListResponseData>>;
    submit(request: MaterialAuditApiSubmitRequest): Promise<MaterialAuditSubmitResponseData>;
    submitWithHttpInfo(request: MaterialAuditApiSubmitRequest): Promise<ApiResponse<MaterialAuditSubmitResponseData>>;
}
