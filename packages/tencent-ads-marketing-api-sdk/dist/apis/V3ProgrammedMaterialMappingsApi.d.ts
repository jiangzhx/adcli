import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedMaterialMappingsGetResponseData } from "../models";
export interface V3ProgrammedMaterialMappingsApiGetRequest {
    accountId: number | string;
    dynamicCreativeId: number | string;
    fields?: unknown;
}
export declare class V3ProgrammedMaterialMappingsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ProgrammedMaterialMappingsApiGetRequest): Promise<ProgrammedMaterialMappingsGetResponseData>;
    getWithHttpInfo(request: V3ProgrammedMaterialMappingsApiGetRequest): Promise<ApiResponse<ProgrammedMaterialMappingsGetResponseData>>;
}
