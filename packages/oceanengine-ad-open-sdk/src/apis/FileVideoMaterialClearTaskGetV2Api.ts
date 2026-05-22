// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoMaterialClearTaskGetV2Response } from "../models";


export interface OpenApi2FileVideoMaterialClearTaskGetGetRequest {
  advertiserId: number | string;
  clearIds?: number | string[];
  page?: number;
  pageSize?: number;
}

export class FileVideoMaterialClearTaskGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoMaterialClearTaskGetGet(request: OpenApi2FileVideoMaterialClearTaskGetGetRequest): Promise<FileVideoMaterialClearTaskGetV2Response> {
    const response = await this.openApi2FileVideoMaterialClearTaskGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoMaterialClearTaskGetGetWithHttpInfo(request: OpenApi2FileVideoMaterialClearTaskGetGetRequest): Promise<ApiResponse<FileVideoMaterialClearTaskGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoMaterialClearTaskGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoMaterialClearTaskGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/material/clear_task/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "clear_ids", value: request.clearIds, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


