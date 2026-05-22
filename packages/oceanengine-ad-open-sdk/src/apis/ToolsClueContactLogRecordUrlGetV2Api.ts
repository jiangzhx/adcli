// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueContactLogRecordUrlGetV2Filter, ToolsClueContactLogRecordUrlGetV2Response } from "../models";


export interface OpenApi2ToolsClueContactLogRecordUrlGetGetRequest {
  advertiserId: number | string;
  clueId: number | string;
  filter?: ToolsClueContactLogRecordUrlGetV2Filter;
}

export class ToolsClueContactLogRecordUrlGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueContactLogRecordUrlGetGet(request: OpenApi2ToolsClueContactLogRecordUrlGetGetRequest): Promise<ToolsClueContactLogRecordUrlGetV2Response> {
    const response = await this.openApi2ToolsClueContactLogRecordUrlGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueContactLogRecordUrlGetGetWithHttpInfo(request: OpenApi2ToolsClueContactLogRecordUrlGetGetRequest): Promise<ApiResponse<ToolsClueContactLogRecordUrlGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueContactLogRecordUrlGetGet");
    }

    if (request.clueId == null) {
      throw new ApiException("Missing the required parameter 'clueId' when calling openApi2ToolsClueContactLogRecordUrlGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueContactLogRecordUrlGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/contact_log/record_url/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "clue_id", value: request.clueId },
        { name: "filter", value: request.filter }
      ]
    });
  }
}


