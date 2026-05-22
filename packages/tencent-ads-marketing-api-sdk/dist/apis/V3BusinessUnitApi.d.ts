import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessUnitAddRequest, BusinessUnitAddResponseData } from "../models";
export interface V3BusinessUnitApiAddRequest {
    data: BusinessUnitAddRequest;
}
export declare class V3BusinessUnitApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3BusinessUnitApiAddRequest): Promise<BusinessUnitAddResponseData>;
    addWithHttpInfo(request: V3BusinessUnitApiAddRequest): Promise<ApiResponse<BusinessUnitAddResponseData>>;
}
