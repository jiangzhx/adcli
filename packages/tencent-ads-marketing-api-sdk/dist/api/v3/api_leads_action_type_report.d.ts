import { ApiClient, type ApiResponse } from "./client";
import type { LeadsActionTypeReportAddRequest, LeadsActionTypeReportAddResponseData } from "../../model/v3/index";
export interface LeadsActionTypeReportApiAddRequest {
    data: LeadsActionTypeReportAddRequest;
}
export declare class LeadsActionTypeReportApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: LeadsActionTypeReportApiAddRequest): Promise<LeadsActionTypeReportAddResponseData>;
    addWithHttpInfo(request: LeadsActionTypeReportApiAddRequest): Promise<ApiResponse<LeadsActionTypeReportAddResponseData>>;
}
