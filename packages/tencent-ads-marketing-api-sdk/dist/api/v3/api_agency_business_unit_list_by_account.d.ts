import { ApiClient, type ApiResponse } from "./client";
import type { AgencyBusinessUnitListByAccountGetRequest, AgencyBusinessUnitListByAccountGetResponseData } from "../../model/v3/index";
export interface AgencyBusinessUnitListByAccountApiGetRequest {
    data: AgencyBusinessUnitListByAccountGetRequest;
}
export declare class AgencyBusinessUnitListByAccountApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AgencyBusinessUnitListByAccountApiGetRequest): Promise<AgencyBusinessUnitListByAccountGetResponseData>;
    getWithHttpInfo(request: AgencyBusinessUnitListByAccountApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListByAccountGetResponseData>>;
}
