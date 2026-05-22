import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SubcustomerTransferAddRequest, SubcustomerTransferAddResponseData } from "../models";
export interface V3SubcustomerTransferApiAddRequest {
    data: SubcustomerTransferAddRequest;
}
export declare class V3SubcustomerTransferApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3SubcustomerTransferApiAddRequest): Promise<SubcustomerTransferAddResponseData>;
    addWithHttpInfo(request: V3SubcustomerTransferApiAddRequest): Promise<ApiResponse<SubcustomerTransferAddResponseData>>;
}
