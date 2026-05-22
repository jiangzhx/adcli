import { ApiClient, type ApiResponse } from "./client";
import type { ProgrammedTemplateGetRequest, ProgrammedTemplateGetResponseData } from "../model/index";
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
