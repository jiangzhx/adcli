import { ApiClient, type ApiResponse } from "./client";
import type { OuterCluesContactUpdateRequest, OuterCluesContactUpdateResponseData } from "../model/index";
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
