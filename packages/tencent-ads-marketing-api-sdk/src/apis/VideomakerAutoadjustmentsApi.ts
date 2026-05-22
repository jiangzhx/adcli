// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideomakerAutoadjustmentsAddResponseData } from "../models";

export interface VideomakerAutoadjustmentsApiAddRequest {
  accountId: number | string;
  adjustmentType: string;
  videoId?: string;
  videoFile?: Blob;
  signature?: string;
  smartAdjustment?: unknown;
  manualAdjustment?: unknown;
}


export class VideomakerAutoadjustmentsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: VideomakerAutoadjustmentsApiAddRequest): Promise<VideomakerAutoadjustmentsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: VideomakerAutoadjustmentsApiAddRequest): Promise<ApiResponse<VideomakerAutoadjustmentsAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.adjustmentType == null) {
      throw new ApiException("Missing the required parameter 'adjustmentType' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<VideomakerAutoadjustmentsAddResponseData>({
      method: "POST",
      path: "/videomaker_autoadjustments/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        video_id: request.videoId,
        signature: request.signature,
        adjustment_type: request.adjustmentType,
        smart_adjustment: request.smartAdjustment,
        manual_adjustment: request.manualAdjustment
      },
      files: {
        video_file: request.videoFile
      }
    });
  }

}


