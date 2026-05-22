import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessUnitListGetResponseData } from "../models";
export interface V3BusinessUnitListApiGetRequest {
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class V3BusinessUnitListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3BusinessUnitListApiGetRequest): Promise<BusinessUnitListGetResponseData>;
    getWithHttpInfo(request: V3BusinessUnitListApiGetRequest): Promise<ApiResponse<BusinessUnitListGetResponseData>>;
}
