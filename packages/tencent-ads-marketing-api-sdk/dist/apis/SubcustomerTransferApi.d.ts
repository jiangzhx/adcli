import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SubcustomerTransferAddRequest, SubcustomerTransferAddResponseData } from "../models";
export interface SubcustomerTransferApiAddRequest {
    data: SubcustomerTransferAddRequest;
}
export declare class SubcustomerTransferApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: SubcustomerTransferApiAddRequest): Promise<SubcustomerTransferAddResponseData>;
    addWithHttpInfo(request: SubcustomerTransferApiAddRequest): Promise<ApiResponse<SubcustomerTransferAddResponseData>>;
}
