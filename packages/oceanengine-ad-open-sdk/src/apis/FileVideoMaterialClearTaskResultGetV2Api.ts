// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileVideoMaterialClearTaskResultGetV2Response } from "../models";


export class FileVideoMaterialClearTaskResultGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoMaterialClearTaskResultGetGet(advertiserId: number, clearId: number, page: number, pageSize: number): Promise<FileVideoMaterialClearTaskResultGetV2Response> {
    const response = await this.openApi2FileVideoMaterialClearTaskResultGetGetWithHttpInfo(advertiserId, clearId, page, pageSize);
    return response.data;
  }

  async openApi2FileVideoMaterialClearTaskResultGetGetWithHttpInfo(advertiserId: number, clearId: number, page: number, pageSize: number): Promise<ApiResponse<FileVideoMaterialClearTaskResultGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoMaterialClearTaskResultGetGet");
    }

    if (clearId == null) {
      throw new ApiException("Missing the required parameter 'clearId' when calling openApi2FileVideoMaterialClearTaskResultGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoMaterialClearTaskResultGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/material/clear_task_result/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "clear_id", value: clearId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


