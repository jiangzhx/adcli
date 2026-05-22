// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRtaGetInfoV2AccountType, ToolsRtaGetInfoV2Response } from "../models";


export interface OpenApi2ToolsRtaGetInfoGetRequest {
  advertiserId: number | string;
  campaignId?: number | string;
  accountType?: ToolsRtaGetInfoV2AccountType;
}

export class ToolsRtaGetInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRtaGetInfoGet(request: OpenApi2ToolsRtaGetInfoGetRequest): Promise<ToolsRtaGetInfoV2Response> {
    const response = await this.openApi2ToolsRtaGetInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRtaGetInfoGetWithHttpInfo(request: OpenApi2ToolsRtaGetInfoGetRequest): Promise<ApiResponse<ToolsRtaGetInfoV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRtaGetInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRtaGetInfoV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rta/get_info/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "campaign_id", value: request.campaignId },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


