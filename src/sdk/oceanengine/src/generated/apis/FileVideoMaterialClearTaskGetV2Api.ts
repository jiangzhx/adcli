// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileVideoMaterialClearTaskGetV2Response } from "../models";


export class FileVideoMaterialClearTaskGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileVideoMaterialClearTaskGetGet(advertiserId: number, clearIds: number[], page: number, pageSize: number): Promise<FileVideoMaterialClearTaskGetV2Response> {
    const response = await this.openApi2FileVideoMaterialClearTaskGetGetWithHttpInfo(advertiserId, clearIds, page, pageSize);
    return response.data;
  }

  async openApi2FileVideoMaterialClearTaskGetGetWithHttpInfo(advertiserId: number, clearIds: number[], page: number, pageSize: number): Promise<ApiResponse<FileVideoMaterialClearTaskGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileVideoMaterialClearTaskGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FileVideoMaterialClearTaskGetV2Response>({
      method: "GET",
      path: "/open_api/2/file/video/material/clear_task/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "clear_ids", value: clearIds, collectionFormat: "csv" }
      ]
    });
  }
}


