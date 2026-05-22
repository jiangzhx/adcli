// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_contact_log_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueContactLogListV2Filter, ToolsClueContactLogListV2Response } from "../models/index";


export interface ToolsClueContactLogListV2ApiOpenApi2ToolsClueContactLogListGetRequest {
  advertiserId: number | string;
  clueId: number | string;
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

  async openApi2ToolsClueContactLogListGet(request: ToolsClueContactLogListV2ApiOpenApi2ToolsClueContactLogListGetRequest): Promise<ToolsClueContactLogListV2Response> {
    const response = await this.openApi2ToolsClueContactLogListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueContactLogListGetWithHttpInfo(request: ToolsClueContactLogListV2ApiOpenApi2ToolsClueContactLogListGetRequest): Promise<ApiResponse<ToolsClueContactLogListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.clueId == null) {
      throw new ApiException("clueId is required and must be specified");
    }

    if (request.clueId != null && Number(request.clueId) < 1) {
      throw new ApiException("clueId must be greater than 1");
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


