// Generated from oceanengine/ad_open_sdk_go api/api_file_video_efficiency_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileVideoEfficiencyGetV2Response } from "../models/index";


export interface FileVideoEfficiencyGetV2ApiOpenApi2FileVideoEfficiencyGetGetRequest {
  advertiserId: string;
  materialIds: string[];
}

export class FileVideoEfficiencyGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoEfficiencyGetGet(request: FileVideoEfficiencyGetV2ApiOpenApi2FileVideoEfficiencyGetGetRequest): Promise<FileVideoEfficiencyGetV2Response> {
    const response = await this.openApi2FileVideoEfficiencyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoEfficiencyGetGetWithHttpInfo(request: FileVideoEfficiencyGetV2ApiOpenApi2FileVideoEfficiencyGetGetRequest): Promise<ApiResponse<FileVideoEfficiencyGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.materialIds == null) {
      throw new ApiException("materialIds is required and must be specified");
    }

    if (request.materialIds != null && request.materialIds.length < 1) {
      throw new ApiException("materialIds must have at least 1 elements");
    }

    if (request.materialIds != null && request.materialIds.length > 100) {
      throw new ApiException("materialIds must have less than 100 elements");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoEfficiencyGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/efficiency/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_ids", value: request.materialIds }
      ]
    });
  }
}


