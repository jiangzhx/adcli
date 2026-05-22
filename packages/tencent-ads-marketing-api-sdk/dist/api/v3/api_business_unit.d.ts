import { ApiClient, type ApiResponse } from "./client";
import type { BusinessUnitAddRequest, BusinessUnitAddResponseData } from "../../model/v3/index";
export interface BusinessUnitApiAddRequest {
    data: BusinessUnitAddRequest;
}
export declare class BusinessUnitApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: BusinessUnitApiAddRequest): Promise<BusinessUnitAddResponseData>;
    addWithHttpInfo(request: BusinessUnitApiAddRequest): Promise<ApiResponse<BusinessUnitAddResponseData>>;
}
