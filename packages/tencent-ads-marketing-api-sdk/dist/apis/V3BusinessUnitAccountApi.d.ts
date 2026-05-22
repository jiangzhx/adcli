import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessUnitAccountGetRequest, BusinessUnitAccountGetResponseData, BusinessUnitAccountUpdateRequest, BusinessUnitAccountUpdateResponseData } from "../models";
export interface V3BusinessUnitAccountApiGetRequest {
    data: BusinessUnitAccountGetRequest;
}
export interface V3BusinessUnitAccountApiUpdateRequest {
    data: BusinessUnitAccountUpdateRequest;
}
export declare class V3BusinessUnitAccountApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3BusinessUnitAccountApiGetRequest): Promise<BusinessUnitAccountGetResponseData>;
    getWithHttpInfo(request: V3BusinessUnitAccountApiGetRequest): Promise<ApiResponse<BusinessUnitAccountGetResponseData>>;
    update(request: V3BusinessUnitAccountApiUpdateRequest): Promise<BusinessUnitAccountUpdateResponseData>;
    updateWithHttpInfo(request: V3BusinessUnitAccountApiUpdateRequest): Promise<ApiResponse<BusinessUnitAccountUpdateResponseData>>;
}
