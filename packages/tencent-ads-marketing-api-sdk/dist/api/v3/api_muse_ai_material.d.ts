import { ApiClient, type ApiResponse } from "./client";
import type { MuseAiMaterialAddRequest, MuseAiMaterialAddResponseData } from "../../model/v3/index";
export interface MuseAiMaterialApiAddRequest {
    data: MuseAiMaterialAddRequest;
}
export declare class MuseAiMaterialApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MuseAiMaterialApiAddRequest): Promise<MuseAiMaterialAddResponseData>;
    addWithHttpInfo(request: MuseAiMaterialApiAddRequest): Promise<ApiResponse<MuseAiMaterialAddResponseData>>;
}
