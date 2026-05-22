import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OuterCluesContactUpdateRequest, OuterCluesContactUpdateResponseData } from "../models";
export interface OuterCluesContactApiUpdateRequest {
    data: OuterCluesContactUpdateRequest;
}
export declare class OuterCluesContactApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: OuterCluesContactApiUpdateRequest): Promise<OuterCluesContactUpdateResponseData>;
    updateWithHttpInfo(request: OuterCluesContactApiUpdateRequest): Promise<ApiResponse<OuterCluesContactUpdateResponseData>>;
}
