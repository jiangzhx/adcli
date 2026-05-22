// Generated from oceanengine/ad_open_sdk_go api/api_tools_rta_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRtaGetV2AccountType, ToolsRtaGetV2Response } from "../models/index";


export interface ToolsRtaGetV2ApiOpenApi2ToolsRtaGetGetRequest {
  advertiserId: number | string;
  accountType?: ToolsRtaGetV2AccountType;
}

export class ToolsRtaGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRtaGetGet(request: ToolsRtaGetV2ApiOpenApi2ToolsRtaGetGetRequest): Promise<ToolsRtaGetV2Response> {
    const response = await this.openApi2ToolsRtaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRtaGetGetWithHttpInfo(request: ToolsRtaGetV2ApiOpenApi2ToolsRtaGetGetRequest): Promise<ApiResponse<ToolsRtaGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRtaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRtaGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rta/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


