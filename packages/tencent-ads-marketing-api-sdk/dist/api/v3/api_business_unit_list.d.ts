import { ApiClient, type ApiResponse } from "./client";
import type { BusinessUnitListGetResponseData } from "../../model/v3/index";
export interface BusinessUnitListApiGetRequest {
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class BusinessUnitListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BusinessUnitListApiGetRequest): Promise<BusinessUnitListGetResponseData>;
    getWithHttpInfo(request: BusinessUnitListApiGetRequest): Promise<ApiResponse<BusinessUnitListGetResponseData>>;
}
