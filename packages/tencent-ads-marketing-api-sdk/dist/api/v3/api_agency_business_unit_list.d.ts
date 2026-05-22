import { ApiClient, type ApiResponse } from "./client";
import type { AgencyBusinessUnitListGetResponseData } from "../../model/v3/index";
export interface AgencyBusinessUnitListApiGetRequest {
    page: number;
    pageSize: number;
    organizationId?: number | string;
    businessUnitName?: string;
    fields?: unknown;
}
export declare class AgencyBusinessUnitListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AgencyBusinessUnitListApiGetRequest): Promise<AgencyBusinessUnitListGetResponseData>;
    getWithHttpInfo(request: AgencyBusinessUnitListApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListGetResponseData>>;
}
