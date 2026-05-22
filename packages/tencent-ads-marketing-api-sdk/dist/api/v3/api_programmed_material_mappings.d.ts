import { ApiClient, type ApiResponse } from "./client";
import type { ProgrammedMaterialMappingsGetResponseData } from "../../model/v3/index";
export interface ProgrammedMaterialMappingsApiGetRequest {
    accountId: number | string;
    dynamicCreativeId: number | string;
    fields?: unknown;
}
export declare class ProgrammedMaterialMappingsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ProgrammedMaterialMappingsApiGetRequest): Promise<ProgrammedMaterialMappingsGetResponseData>;
    getWithHttpInfo(request: ProgrammedMaterialMappingsApiGetRequest): Promise<ApiResponse<ProgrammedMaterialMappingsGetResponseData>>;
}
