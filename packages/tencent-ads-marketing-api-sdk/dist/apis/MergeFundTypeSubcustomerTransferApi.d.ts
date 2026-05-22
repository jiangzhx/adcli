import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MergeFundTypeSubcustomerTransferAddRequest, MergeFundTypeSubcustomerTransferAddResponseData } from "../models";
export interface MergeFundTypeSubcustomerTransferApiAddRequest {
    data: MergeFundTypeSubcustomerTransferAddRequest;
}
export declare class MergeFundTypeSubcustomerTransferApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MergeFundTypeSubcustomerTransferApiAddRequest): Promise<MergeFundTypeSubcustomerTransferAddResponseData>;
    addWithHttpInfo(request: MergeFundTypeSubcustomerTransferApiAddRequest): Promise<ApiResponse<MergeFundTypeSubcustomerTransferAddResponseData>>;
}
