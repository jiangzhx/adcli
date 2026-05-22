import { ApiClient, type ApiResponse } from "./client";
import type { VideomakerAutoadjustmentsAddResponseData } from "../model/index";
export interface VideomakerAutoadjustmentsApiAddRequest {
    accountId: number | string;
    adjustmentType: string;
    videoId?: string;
    videoFile?: Blob;
    signature?: string;
    smartAdjustment?: unknown;
    manualAdjustment?: unknown;
}
export declare class VideomakerAutoadjustmentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: VideomakerAutoadjustmentsApiAddRequest): Promise<VideomakerAutoadjustmentsAddResponseData>;
    addWithHttpInfo(request: VideomakerAutoadjustmentsApiAddRequest): Promise<ApiResponse<VideomakerAutoadjustmentsAddResponseData>>;
}
