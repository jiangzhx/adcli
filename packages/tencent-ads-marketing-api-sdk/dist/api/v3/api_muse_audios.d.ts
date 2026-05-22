import { ApiClient, type ApiResponse } from "./client";
import type { MuseAudiosGetRequest, MuseAudiosGetResponseData } from "../../model/v3/index";
export interface MuseAudiosApiGetRequest {
    data: MuseAudiosGetRequest;
}
export declare class MuseAudiosApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MuseAudiosApiGetRequest): Promise<MuseAudiosGetResponseData>;
    getWithHttpInfo(request: MuseAudiosApiGetRequest): Promise<ApiResponse<MuseAudiosGetResponseData>>;
}
