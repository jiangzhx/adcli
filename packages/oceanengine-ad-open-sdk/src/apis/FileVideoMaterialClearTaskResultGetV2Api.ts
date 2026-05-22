// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoMaterialClearTaskResultGetV2Response } from "../models";


export interface OpenApi2FileVideoMaterialClearTaskResultGetGetRequest {
  advertiserId: number;
  clearId: number;
  page?: number;
  pageSize?: number;
}

export class FileVideoMaterialClearTaskResultGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoMaterialClearTaskResultGetGet(request: OpenApi2FileVideoMaterialClearTaskResultGetGetRequest): Promise<FileVideoMaterialClearTaskResultGetV2Response> {
    const response = await this.openApi2FileVideoMaterialClearTaskResultGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileVideoMaterialClearTaskResultGetGetWithHttpInfo(request: OpenApi2FileVideoMaterialClearTaskResultGetGetRequest): Promise<ApiResponse<FileVideoMaterialClearTaskResultGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoMaterialClearTaskResultGetGet");
    }

    if (request.clearId == null) {
      throw new ApiException("Missing the required parameter 'clearId' when calling openApi2FileVideoMaterialClearTaskResultGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoMaterialClearTaskResultGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/material/clear_task_result/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "clear_id", value: request.clearId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


