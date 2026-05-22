import { ApiClient, type ApiResponse } from "./client";
import type { AgencyBusinessUnitAddRequest, AgencyBusinessUnitAddResponseData, AgencyBusinessUnitUpdateRequest, AgencyBusinessUnitUpdateResponseData } from "../../model/v3/index";
export interface AgencyBusinessUnitApiAddRequest {
    data: AgencyBusinessUnitAddRequest;
}
export interface AgencyBusinessUnitApiUpdateRequest {
    data: AgencyBusinessUnitUpdateRequest;
}
export declare class AgencyBusinessUnitApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AgencyBusinessUnitApiAddRequest): Promise<AgencyBusinessUnitAddResponseData>;
    addWithHttpInfo(request: AgencyBusinessUnitApiAddRequest): Promise<ApiResponse<AgencyBusinessUnitAddResponseData>>;
    update(request: AgencyBusinessUnitApiUpdateRequest): Promise<AgencyBusinessUnitUpdateResponseData>;
    updateWithHttpInfo(request: AgencyBusinessUnitApiUpdateRequest): Promise<ApiResponse<AgencyBusinessUnitUpdateResponseData>>;
}
