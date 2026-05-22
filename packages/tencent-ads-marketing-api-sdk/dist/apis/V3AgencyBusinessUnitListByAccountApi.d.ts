import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyBusinessUnitListByAccountGetRequest, AgencyBusinessUnitListByAccountGetResponseData } from "../models";
export interface V3AgencyBusinessUnitListByAccountApiGetRequest {
    data: AgencyBusinessUnitListByAccountGetRequest;
}
export declare class V3AgencyBusinessUnitListByAccountApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AgencyBusinessUnitListByAccountApiGetRequest): Promise<AgencyBusinessUnitListByAccountGetResponseData>;
    getWithHttpInfo(request: V3AgencyBusinessUnitListByAccountApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListByAccountGetResponseData>>;
}
