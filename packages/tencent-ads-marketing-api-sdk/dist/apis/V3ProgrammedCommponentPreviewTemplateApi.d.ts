import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedCommponentPreviewTemplateUpdateRequest, ProgrammedCommponentPreviewTemplateUpdateResponseData } from "../models";
export interface V3ProgrammedCommponentPreviewTemplateApiUpdateRequest {
    data: ProgrammedCommponentPreviewTemplateUpdateRequest;
}
export declare class V3ProgrammedCommponentPreviewTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: V3ProgrammedCommponentPreviewTemplateApiUpdateRequest): Promise<ProgrammedCommponentPreviewTemplateUpdateResponseData>;
    updateWithHttpInfo(request: V3ProgrammedCommponentPreviewTemplateApiUpdateRequest): Promise<ApiResponse<ProgrammedCommponentPreviewTemplateUpdateResponseData>>;
}
