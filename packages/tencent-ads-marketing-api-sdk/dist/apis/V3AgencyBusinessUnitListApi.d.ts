import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyBusinessUnitListGetResponseData } from "../models";
export interface V3AgencyBusinessUnitListApiGetRequest {
    page: number;
    pageSize: number;
    organizationId?: number | string;
    businessUnitName?: string;
    fields?: unknown;
}
export declare class V3AgencyBusinessUnitListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AgencyBusinessUnitListApiGetRequest): Promise<AgencyBusinessUnitListGetResponseData>;
    getWithHttpInfo(request: V3AgencyBusinessUnitListApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListGetResponseData>>;
}
