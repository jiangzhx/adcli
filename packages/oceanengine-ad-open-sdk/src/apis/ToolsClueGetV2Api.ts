// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueGetV2Response } from "../models";


export interface OpenApi2ToolsClueGetGetRequest {
  advertiserIds?: number | string[];
  startTime?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
  clueIds?: number | string[];
  encryptSensitiveFields?: boolean;
}

export class ToolsClueGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueGetGet(request: OpenApi2ToolsClueGetGetRequest): Promise<ToolsClueGetV2Response> {
    const response = await this.openApi2ToolsClueGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueGetGetWithHttpInfo(request: OpenApi2ToolsClueGetGetRequest): Promise<ApiResponse<ToolsClueGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "clue_ids", value: request.clueIds, collectionFormat: "csv" },
        { name: "encrypt_sensitive_fields", value: request.encryptSensitiveFields }
      ]
    });
  }
}


