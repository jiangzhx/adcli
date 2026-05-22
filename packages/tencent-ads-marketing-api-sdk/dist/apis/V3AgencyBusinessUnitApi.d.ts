import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyBusinessUnitAddRequest, AgencyBusinessUnitAddResponseData, AgencyBusinessUnitUpdateRequest, AgencyBusinessUnitUpdateResponseData } from "../models";
export interface V3AgencyBusinessUnitApiAddRequest {
    data: AgencyBusinessUnitAddRequest;
}
export interface V3AgencyBusinessUnitApiUpdateRequest {
    data: AgencyBusinessUnitUpdateRequest;
}
export declare class V3AgencyBusinessUnitApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3AgencyBusinessUnitApiAddRequest): Promise<AgencyBusinessUnitAddResponseData>;
    addWithHttpInfo(request: V3AgencyBusinessUnitApiAddRequest): Promise<ApiResponse<AgencyBusinessUnitAddResponseData>>;
    update(request: V3AgencyBusinessUnitApiUpdateRequest): Promise<AgencyBusinessUnitUpdateResponseData>;
    updateWithHttpInfo(request: V3AgencyBusinessUnitApiUpdateRequest): Promise<ApiResponse<AgencyBusinessUnitUpdateResponseData>>;
}
