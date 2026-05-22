// Generated from oceanengine/ad_open_sdk_go api/api_file_image_ad_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileImageAdGetV2Response } from "../models/index";


export interface FileImageAdGetV2ApiOpenApi2FileImageAdGetGetRequest {
  advertiserId: number | string;
  imageIds: string[];
}

export class FileImageAdGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileImageAdGetGet(request: FileImageAdGetV2ApiOpenApi2FileImageAdGetGetRequest): Promise<FileImageAdGetV2Response> {
    const response = await this.openApi2FileImageAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileImageAdGetGetWithHttpInfo(request: FileImageAdGetV2ApiOpenApi2FileImageAdGetGetRequest): Promise<ApiResponse<FileImageAdGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileImageAdGetGet");
    }

    if (request.imageIds == null) {
      throw new ApiException("Missing the required parameter 'imageIds' when calling openApi2FileImageAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileImageAdGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/image/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "image_ids", value: request.imageIds, collectionFormat: "csv" }
      ]
    });
  }
}


