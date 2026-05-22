import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PlayablePagesAddResponseData, PlayablePagesGetResponseData } from "../models";
export interface PlayablePagesApiAddRequest {
    accountId: number | string;
    playablePageName: string;
    materialFile: Blob;
}
export interface PlayablePagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class PlayablePagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: PlayablePagesApiAddRequest): Promise<PlayablePagesAddResponseData>;
    addWithHttpInfo(request: PlayablePagesApiAddRequest): Promise<ApiResponse<PlayablePagesAddResponseData>>;
    get(request: PlayablePagesApiGetRequest): Promise<PlayablePagesGetResponseData>;
    getWithHttpInfo(request: PlayablePagesApiGetRequest): Promise<ApiResponse<PlayablePagesGetResponseData>>;
}
