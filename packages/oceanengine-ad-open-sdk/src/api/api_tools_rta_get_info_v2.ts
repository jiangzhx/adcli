// Generated from oceanengine/ad_open_sdk_go api/api_tools_rta_get_info_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRtaGetInfoV2AccountType, ToolsRtaGetInfoV2Response } from "../models/index";


export interface ToolsRtaGetInfoV2ApiOpenApi2ToolsRtaGetInfoGetRequest {
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

  async openApi2ToolsRtaGetInfoGet(request: ToolsRtaGetInfoV2ApiOpenApi2ToolsRtaGetInfoGetRequest): Promise<ToolsRtaGetInfoV2Response> {
    const response = await this.openApi2ToolsRtaGetInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRtaGetInfoGetWithHttpInfo(request: ToolsRtaGetInfoV2ApiOpenApi2ToolsRtaGetInfoGetRequest): Promise<ApiResponse<ToolsRtaGetInfoV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
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


