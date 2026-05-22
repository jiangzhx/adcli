import { ApiClient, type ApiResponse } from "./client";
import type { AgencyBusinessUnitListAccountGetResponseData } from "../../model/v3/index";
export interface AgencyBusinessUnitListAccountApiGetRequest {
    organizationId: number | string;
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class AgencyBusinessUnitListAccountApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AgencyBusinessUnitListAccountApiGetRequest): Promise<AgencyBusinessUnitListAccountGetResponseData>;
    getWithHttpInfo(request: AgencyBusinessUnitListAccountApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListAccountGetResponseData>>;
}
