import { ApiClient, type ApiResponse } from "./client";
import type { MergeFundTypeSubcustomerTransferAddRequest, MergeFundTypeSubcustomerTransferAddResponseData } from "../../model/v3/index";
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
