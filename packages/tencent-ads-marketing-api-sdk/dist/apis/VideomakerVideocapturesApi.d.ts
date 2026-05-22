import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideomakerVideocapturesAddResponseData } from "../models";
export interface VideomakerVideocapturesApiAddRequest {
    accountId: number | string;
    videoId?: string;
    videoFile?: Blob;
    signature?: string;
    number?: number;
    returnImageIds?: boolean;
}
export declare class VideomakerVideocapturesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: VideomakerVideocapturesApiAddRequest): Promise<VideomakerVideocapturesAddResponseData>;
    addWithHttpInfo(request: VideomakerVideocapturesApiAddRequest): Promise<ApiResponse<VideomakerVideocapturesAddResponseData>>;
}
