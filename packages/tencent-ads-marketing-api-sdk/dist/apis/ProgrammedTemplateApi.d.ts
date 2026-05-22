import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedTemplateGetRequest, ProgrammedTemplateGetResponseData } from "../models";
export interface ProgrammedTemplateApiGetRequest {
    data: ProgrammedTemplateGetRequest;
}
export declare class ProgrammedTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ProgrammedTemplateApiGetRequest): Promise<ProgrammedTemplateGetResponseData>;
    getWithHttpInfo(request: ProgrammedTemplateApiGetRequest): Promise<ApiResponse<ProgrammedTemplateGetResponseData>>;
}
