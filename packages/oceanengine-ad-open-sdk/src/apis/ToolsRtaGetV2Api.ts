// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRtaGetV2AccountType, ToolsRtaGetV2Response } from "../models";


export interface OpenApi2ToolsRtaGetGetRequest {
  advertiserId: number;
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

  async openApi2ToolsRtaGetGet(request: OpenApi2ToolsRtaGetGetRequest): Promise<ToolsRtaGetV2Response> {
    const response = await this.openApi2ToolsRtaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRtaGetGetWithHttpInfo(request: OpenApi2ToolsRtaGetGetRequest): Promise<ApiResponse<ToolsRtaGetV2Response>> {
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


