import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedTemplateGetRequest, ProgrammedTemplateGetResponseData } from "../models";
export interface V3ProgrammedTemplateApiGetRequest {
    data: ProgrammedTemplateGetRequest;
}
export declare class V3ProgrammedTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ProgrammedTemplateApiGetRequest): Promise<ProgrammedTemplateGetResponseData>;
    getWithHttpInfo(request: V3ProgrammedTemplateApiGetRequest): Promise<ApiResponse<ProgrammedTemplateGetResponseData>>;
}
