// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_contact_log_record_url_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueContactLogRecordUrlGetV2Filter, ToolsClueContactLogRecordUrlGetV2Response } from "../models/index";


export interface ToolsClueContactLogRecordUrlGetV2ApiOpenApi2ToolsClueContactLogRecordUrlGetGetRequest {
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

  async openApi2ToolsClueContactLogRecordUrlGetGet(request: ToolsClueContactLogRecordUrlGetV2ApiOpenApi2ToolsClueContactLogRecordUrlGetGetRequest): Promise<ToolsClueContactLogRecordUrlGetV2Response> {
    const response = await this.openApi2ToolsClueContactLogRecordUrlGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueContactLogRecordUrlGetGetWithHttpInfo(request: ToolsClueContactLogRecordUrlGetV2ApiOpenApi2ToolsClueContactLogRecordUrlGetGetRequest): Promise<ApiResponse<ToolsClueContactLogRecordUrlGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.clueId == null) {
      throw new ApiException("clueId is required and must be specified");
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


