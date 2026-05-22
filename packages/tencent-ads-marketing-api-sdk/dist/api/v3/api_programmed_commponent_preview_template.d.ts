import { ApiClient, type ApiResponse } from "./client";
import type { ProgrammedCommponentPreviewTemplateUpdateRequest, ProgrammedCommponentPreviewTemplateUpdateResponseData } from "../../model/v3/index";
export interface ProgrammedCommponentPreviewTemplateApiUpdateRequest {
    data: ProgrammedCommponentPreviewTemplateUpdateRequest;
}
export declare class ProgrammedCommponentPreviewTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: ProgrammedCommponentPreviewTemplateApiUpdateRequest): Promise<ProgrammedCommponentPreviewTemplateUpdateResponseData>;
    updateWithHttpInfo(request: ProgrammedCommponentPreviewTemplateApiUpdateRequest): Promise<ApiResponse<ProgrammedCommponentPreviewTemplateUpdateResponseData>>;
}
