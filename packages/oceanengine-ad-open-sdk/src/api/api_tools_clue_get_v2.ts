// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueGetV2Response } from "../models/index";


export interface ToolsClueGetV2ApiOpenApi2ToolsClueGetGetRequest {
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

  async openApi2ToolsClueGetGet(request: ToolsClueGetV2ApiOpenApi2ToolsClueGetGetRequest): Promise<ToolsClueGetV2Response> {
    const response = await this.openApi2ToolsClueGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueGetGetWithHttpInfo(request: ToolsClueGetV2ApiOpenApi2ToolsClueGetGetRequest): Promise<ApiResponse<ToolsClueGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/get/",
      queryParams: [
        { name: "advertiser_ids", value: request.advertiserIds },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "clue_ids", value: request.clueIds },
        { name: "encrypt_sensitive_fields", value: request.encryptSensitiveFields }
      ]
    });
  }
}


