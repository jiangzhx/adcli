import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideomakerSubtitlesAddResponseData } from "../models";
export interface VideomakerSubtitlesApiAddRequest {
    accountId: number | string;
    videoId?: string;
    videoFile?: Blob;
    signature?: string;
    onlySubtitleFile?: boolean;
}
export declare class VideomakerSubtitlesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: VideomakerSubtitlesApiAddRequest): Promise<VideomakerSubtitlesAddResponseData>;
    addWithHttpInfo(request: VideomakerSubtitlesApiAddRequest): Promise<ApiResponse<VideomakerSubtitlesAddResponseData>>;
}
