import { ApiClient, type ApiResponse } from "./client";
import type { BusinessUnitAccountGetRequest, BusinessUnitAccountGetResponseData, BusinessUnitAccountUpdateRequest, BusinessUnitAccountUpdateResponseData } from "../../model/v3/index";
export interface BusinessUnitAccountApiGetRequest {
    data: BusinessUnitAccountGetRequest;
}
export interface BusinessUnitAccountApiUpdateRequest {
    data: BusinessUnitAccountUpdateRequest;
}
export declare class BusinessUnitAccountApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BusinessUnitAccountApiGetRequest): Promise<BusinessUnitAccountGetResponseData>;
    getWithHttpInfo(request: BusinessUnitAccountApiGetRequest): Promise<ApiResponse<BusinessUnitAccountGetResponseData>>;
    update(request: BusinessUnitAccountApiUpdateRequest): Promise<BusinessUnitAccountUpdateResponseData>;
    updateWithHttpInfo(request: BusinessUnitAccountApiUpdateRequest): Promise<ApiResponse<BusinessUnitAccountUpdateResponseData>>;
}
