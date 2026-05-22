import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OuterCluesActionTypeReportRequest, OuterCluesActionTypeReportResponseData, OuterCluesAddRequest, OuterCluesAddResponseData, OuterCluesUpdateRequest, OuterCluesUpdateResponseData } from "../models";
export interface OuterCluesApiActionTypeReportRequest {
    data: OuterCluesActionTypeReportRequest;
}
export interface OuterCluesApiAddRequest {
    data: OuterCluesAddRequest;
}
export interface OuterCluesApiUpdateRequest {
    data: OuterCluesUpdateRequest;
}
export declare class OuterCluesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    actionTypeReport(request: OuterCluesApiActionTypeReportRequest): Promise<OuterCluesActionTypeReportResponseData>;
    actionTypeReportWithHttpInfo(request: OuterCluesApiActionTypeReportRequest): Promise<ApiResponse<OuterCluesActionTypeReportResponseData>>;
    add(request: OuterCluesApiAddRequest): Promise<OuterCluesAddResponseData>;
    addWithHttpInfo(request: OuterCluesApiAddRequest): Promise<ApiResponse<OuterCluesAddResponseData>>;
    update(request: OuterCluesApiUpdateRequest): Promise<OuterCluesUpdateResponseData>;
    updateWithHttpInfo(request: OuterCluesApiUpdateRequest): Promise<ApiResponse<OuterCluesUpdateResponseData>>;
}
