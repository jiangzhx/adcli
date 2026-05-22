import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseAiMaterialAddRequest, MuseAiMaterialAddResponseData } from "../models";
export interface V3MuseAiMaterialApiAddRequest {
    data: MuseAiMaterialAddRequest;
}
export declare class V3MuseAiMaterialApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MuseAiMaterialApiAddRequest): Promise<MuseAiMaterialAddResponseData>;
    addWithHttpInfo(request: V3MuseAiMaterialApiAddRequest): Promise<ApiResponse<MuseAiMaterialAddResponseData>>;
}
