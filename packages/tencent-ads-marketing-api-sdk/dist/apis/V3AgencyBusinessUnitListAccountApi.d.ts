import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyBusinessUnitListAccountGetResponseData } from "../models";
export interface V3AgencyBusinessUnitListAccountApiGetRequest {
    organizationId: number | string;
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class V3AgencyBusinessUnitListAccountApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AgencyBusinessUnitListAccountApiGetRequest): Promise<AgencyBusinessUnitListAccountGetResponseData>;
    getWithHttpInfo(request: V3AgencyBusinessUnitListAccountApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListAccountGetResponseData>>;
}
