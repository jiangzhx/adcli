import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseAudiosGetRequest, MuseAudiosGetResponseData } from "../models";
export interface V3MuseAudiosApiGetRequest {
    data: MuseAudiosGetRequest;
}
export declare class V3MuseAudiosApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MuseAudiosApiGetRequest): Promise<MuseAudiosGetResponseData>;
    getWithHttpInfo(request: V3MuseAudiosApiGetRequest): Promise<ApiResponse<MuseAudiosGetResponseData>>;
}
