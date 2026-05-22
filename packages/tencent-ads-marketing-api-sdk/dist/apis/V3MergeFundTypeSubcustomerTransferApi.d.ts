import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MergeFundTypeSubcustomerTransferAddRequest, MergeFundTypeSubcustomerTransferAddResponseData } from "../models";
export interface V3MergeFundTypeSubcustomerTransferApiAddRequest {
    data: MergeFundTypeSubcustomerTransferAddRequest;
}
export declare class V3MergeFundTypeSubcustomerTransferApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MergeFundTypeSubcustomerTransferApiAddRequest): Promise<MergeFundTypeSubcustomerTransferAddResponseData>;
    addWithHttpInfo(request: V3MergeFundTypeSubcustomerTransferApiAddRequest): Promise<ApiResponse<MergeFundTypeSubcustomerTransferAddResponseData>>;
}
