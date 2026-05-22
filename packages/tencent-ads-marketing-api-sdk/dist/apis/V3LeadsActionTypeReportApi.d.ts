import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsActionTypeReportAddRequest, LeadsActionTypeReportAddResponseData } from "../models";
export interface V3LeadsActionTypeReportApiAddRequest {
    data: LeadsActionTypeReportAddRequest;
}
export declare class V3LeadsActionTypeReportApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3LeadsActionTypeReportApiAddRequest): Promise<LeadsActionTypeReportAddResponseData>;
    addWithHttpInfo(request: V3LeadsActionTypeReportApiAddRequest): Promise<ApiResponse<LeadsActionTypeReportAddResponseData>>;
}
