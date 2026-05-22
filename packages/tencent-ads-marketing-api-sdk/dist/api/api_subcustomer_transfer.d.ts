import { ApiClient, type ApiResponse } from "./client";
import type { SubcustomerTransferAddRequest, SubcustomerTransferAddResponseData } from "../model/index";
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
