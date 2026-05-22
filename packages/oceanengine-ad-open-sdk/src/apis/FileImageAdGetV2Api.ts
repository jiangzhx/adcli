// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileImageAdGetV2Response } from "../models";


export interface OpenApi2FileImageAdGetGetRequest {
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

  async openApi2FileImageAdGetGet(request: OpenApi2FileImageAdGetGetRequest): Promise<FileImageAdGetV2Response> {
    const response = await this.openApi2FileImageAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileImageAdGetGetWithHttpInfo(request: OpenApi2FileImageAdGetGetRequest): Promise<ApiResponse<FileImageAdGetV2Response>> {
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


