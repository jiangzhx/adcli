// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueContactLogRecordUrlGetV2Filter, ToolsClueContactLogRecordUrlGetV2Response } from "../models";


export class ToolsClueContactLogRecordUrlGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueContactLogRecordUrlGetGet(advertiserId: number, clueId: number, filter: ToolsClueContactLogRecordUrlGetV2Filter): Promise<ToolsClueContactLogRecordUrlGetV2Response> {
    const response = await this.openApi2ToolsClueContactLogRecordUrlGetGetWithHttpInfo(advertiserId, clueId, filter);
    return response.data;
  }

  async openApi2ToolsClueContactLogRecordUrlGetGetWithHttpInfo(advertiserId: number, clueId: number, filter: ToolsClueContactLogRecordUrlGetV2Filter): Promise<ApiResponse<ToolsClueContactLogRecordUrlGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueContactLogRecordUrlGetGet");
    }

    if (clueId == null) {
      throw new ApiException("Missing the required parameter 'clueId' when calling openApi2ToolsClueContactLogRecordUrlGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueContactLogRecordUrlGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/contact_log/record_url/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "clue_id", value: clueId },
        { name: "filter", value: filter }
      ]
    });
  }
}


