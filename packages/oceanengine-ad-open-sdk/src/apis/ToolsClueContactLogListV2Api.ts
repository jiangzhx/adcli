// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueContactLogListV2Filter, ToolsClueContactLogListV2Response } from "../models";


export interface OpenApi2ToolsClueContactLogListGetRequest {
  advertiserId: number;
  clueId: number;
  filter?: ToolsClueContactLogListV2Filter;
}

export class ToolsClueContactLogListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueContactLogListGet(request: OpenApi2ToolsClueContactLogListGetRequest): Promise<ToolsClueContactLogListV2Response> {
    const response = await this.openApi2ToolsClueContactLogListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueContactLogListGetWithHttpInfo(request: OpenApi2ToolsClueContactLogListGetRequest): Promise<ApiResponse<ToolsClueContactLogListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueContactLogListGet");
    }

    if (request.clueId == null) {
      throw new ApiException("Missing the required parameter 'clueId' when calling openApi2ToolsClueContactLogListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueContactLogListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/contact_log/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "clue_id", value: request.clueId },
        { name: "filter", value: request.filter }
      ]
    });
  }
}


